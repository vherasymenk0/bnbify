import { z, ZodSchema } from 'zod'
import { formatBytes } from '~/utils/helpers'

const minError = (value: number, key: string) => {
  return `${key} must be at least ${value} characters`
}

export const validateWitZodSchema = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data)

  if (!result.success) {
    const err = result.error?.errors.map((e) => e.message).join('; ')
    throw new Error(err)
  }
  return result.data
}

const validateFile = (maxFileSize = 1024 * 1024) => {
  const acceptedFileTypes = ['image/png']
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
