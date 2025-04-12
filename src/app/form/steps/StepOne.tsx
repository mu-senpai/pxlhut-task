'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { stepOneSchema, StepOneSchemaType } from '@/lib/validation/stepOneSchema'
import { useDispatch } from 'react-redux'
import { updateForm } from '@/store/formSlice'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// import ThemeToggle from '@/components/ThemeToggle'

export default function StepOne({ onNext }: { onNext: () => void }) {
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<StepOneSchemaType>({
    resolver: zodResolver(stepOneSchema)
  })

  const onSubmit = (data: StepOneSchemaType) => {
    dispatch(updateForm(data))
    onNext()
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Personal Information</h2>
          {/* <ThemeToggle /> */}
        </CardHeader>
        <CardContent className="space-y-4">

          <div>
            <Label>Full Name</Label>
            <Input {...register('fullName')} placeholder="Your Name" />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div>
            <Label>Email</Label>
            <Input {...register('email')} placeholder="you@example.com" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input {...register('phone')} placeholder="0123456789" />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <Button type="submit" variant="outline" className="w-full">Next</Button>
        </CardContent>
      </Card>
    </motion.form>
  )
}
