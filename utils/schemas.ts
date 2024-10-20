import { z, ZodSchema } from 'zod'

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
