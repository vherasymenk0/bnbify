'use server'

import { ActionFunction } from '~/utils/types'
import { imageSchema, profileSchema, validateWitZodSchema } from '~/utils/schemas'
import { clerkClient, currentUser } from '@clerk/nextjs/server'
import db from '~/utils/db'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { uploadImage } from '~/utils/supabase'

const getAuthUser = async () => {
  const user = await currentUser()
  if (!user) throw new Error('You must be logged in to access this route')
  // @ts-ignore
  if (!user.privateMetadata.hasProfile) redirect('/profile/create')
  return user
}

const renderError = (error: unknown) => {
  console.log(error)
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  }
}

export const createProfileAction: ActionFunction = async (prevState, formData) => {
  try {
    const user = await currentUser()
    if (!user) throw new Error('Please login to create a profile')

    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWitZodSchema(profileSchema, rawData)
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validatedFields
      }
    })
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true
      }
    })
  } catch (e) {
    return renderError(e)
  }
  redirect('/')
}


export const fetchProfileImage = async () => {
  const user = await getAuthUser()
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id
    },
    select: {
      profileImage: true
    }
  })

  return profile?.profileImage
}

export const updateProfileImageAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser()
  try {
    const image = formData.get('image') as File
    const validatedImg = validateWitZodSchema(imageSchema, { image })
    const fullPath = await uploadImage(validatedImg.image)

    await db.profile.update({
      where: { clerkId: user.id }, data: {
        profileImage: fullPath
      }
    })
    revalidatePath('/profile')
  } catch (e) {
    return renderError(e)
  }
  return { message: 'Profile image updated successfully' }
}

export const fetchProfile = async () => {
  const user = await getAuthUser()
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id
    }
  })

  if (!profile) redirect('/profile/create')
  return profile
}

export const updateProfileAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser()
  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWitZodSchema(profileSchema, rawData)

    await db.profile.update({
      where: {
        clerkId: user.id
      },
      data: validatedFields
    })
    revalidatePath('/profile')
    return { message: 'Profile updated successfully' }
  } catch (e) {
    return renderError(e)
  }
}
