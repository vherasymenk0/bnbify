'use server'

import { ActionFunction } from '~/utils/types'
import { profileSchema } from '~/utils/schemas'
import { clerkClient, currentUser } from '@clerk/nextjs/server'
import db from '~/utils/db'
import { redirect } from 'next/navigation'

export const createProfileAction: ActionFunction = async (prevState, formData) => {
  try {
    const user = await currentUser()
    if (!user) throw new Error('Please login to create a profile')

    const rawData = Object.fromEntries(formData)
    const validatedFields = profileSchema.parse(rawData)
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
    const message = e instanceof Error ? e.message : 'An error occurred'
    return { message }
  }
  redirect('/')
}


export const fetchProfileImage = async () => {
  const user = await currentUser()
  if (!user) return undefined

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
