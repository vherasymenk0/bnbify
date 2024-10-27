import { z, ZodSchema } from 'zod'
import { formatBytes } from '~/utils/helpers'

const minError = (value: number, key: string) => {
  return `${key} must be at least ${value} characters`
}

const maxError = (value: number, key: string) => {
  return `${key} must be less than ${value} characters`
}

export const validateWithZodSchema = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data)

  if (!result.success) {
    const err = result.error?.errors.map((e) => e.message).join('; ')
    throw new Error(err)
  }
  return result.data
}

const validateFile = (maxFileSize = 1024 * 1024) => {
  const acceptedFileTypes = ['image/png', 'image/jpg', 'image/jpeg']
  return z
    .any()
    .refine((file => !file || file.size <= maxFileSize),
      { message: `File size must be less than ${formatBytes(maxFileSize)}` }
    )
    .refine((file => !file || acceptedFileTypes.some(type => file.type.startsWith(type))),
      { message: `File must be an image` }
    )
}

export const profileSchema = z.object({
  firstName: z.string().min(2, {
    message: minError(2, 'firstName'),
  }),
  lastName: z.string().min(2, {
    message: minError(2, 'lastName'),
  }),
  username: z.string().min(2, {
    message: minError(2, 'username'),
  }),
})

export const imageSchema = z.object({
  image: validateFile()
})

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: minError(2, 'name'),
    })
    .max(100, {
      message: maxError(100, 'name'),
    }),
  tagline: z
    .string()
    .min(2, {
      message: minError(2, 'tagline'),
    })
    .max(100, {
      message: maxError(100, 'tagline'),
    }),
  price: z.coerce.number().int().min(0, {
    message: 'price must be a positive number.',
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length
      return wordCount >= 10 && wordCount <= 1000
    },
    {
      message: 'description must be between 10 and 1000 words.',
    }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: 'guest amount must be a positive number.',
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: 'bedrooms amount must be a positive number.',
  }),
  beds: z.coerce.number().int().min(0, {
    message: 'beds amount must be a positive number.',
  }),
  baths: z.coerce.number().int().min(0, {
    message: 'bahts amount must be a positive number.',
  }),
  amenities: z.string(),
})
