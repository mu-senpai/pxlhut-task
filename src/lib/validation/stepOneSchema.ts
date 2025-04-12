import * as z from 'zod'

export const stepOneSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
})

export type StepOneSchemaType = z.infer<typeof stepOneSchema>