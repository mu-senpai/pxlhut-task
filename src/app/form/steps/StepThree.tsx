'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { stepThreeSchema, StepThreeSchemaType } from '@/lib/validation/stepThreeSchema'
import { useDispatch } from 'react-redux'
import { updateForm } from '@/store/formSlice'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function StepThree({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<StepThreeSchemaType>({
    resolver: zodResolver(stepThreeSchema)
  })

  const onSubmit = (data: StepThreeSchemaType) => {
    const { confirmPassword, password ...rest } = data
    if (password !== confirmPassword) {
      return;
    }
    dispatch(updateForm(rest))
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
          <h2 className="text-xl font-semibold">Account Setup</h2>
        </CardHeader>
        <CardContent className="space-y-4">

          <div>
            <Label>Username</Label>
            <Input {...register('username')} placeholder="Choose a username" />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          <div>
            <Label>Password</Label>
            <Input type="password" {...register('password')} placeholder="Password" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <Label>Confirm Password</Label>
            <Input type="password" {...register('confirmPassword')} placeholder="Confirm Password" />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={onBack}>Previous</Button>
            <Button type="submit" variant="outline">Next</Button>
          </div>
        </CardContent>
      </Card>
    </motion.form>
  )
}