import * as z from 'zod'

export const stepTwoSchema = z.object({
  street: z.string().min(1, 'Street Address is required'),
  city: z.string().min(1, 'City is required'),
  zip: z.string().min(4, 'Zip code must be at least 4 digits'),
})

export type StepTwoSchemaType = z.infer<typeof stepTwoSchema>