import * as z from 'zod'

export const stepThreeSchema = z.object({
  username: z.string().min(4, 'Username must be at least 4 characters'),
  password: z.string()
  .min(6, 'Password must be at least 6 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[\W_]/, 'Password must contain at least one special character (e.g., !, @, #, $, etc.)'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

export type StepThreeSchemaType = z.infer<typeof stepThreeSchema>
