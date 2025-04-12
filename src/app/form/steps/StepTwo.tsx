'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { stepTwoSchema, StepTwoSchemaType } from '@/lib/validation/stepTwoSchema'
import { useDispatch } from 'react-redux'
import { updateForm } from '@/store/formSlice'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function StepTwo({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<StepTwoSchemaType>({
    resolver: zodResolver(stepTwoSchema)
  })

  const onSubmit = (data: StepTwoSchemaType) => {
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
          <h2 className="text-xl font-semibold">Address Details</h2>
        </CardHeader>
        <CardContent className="space-y-4">

          <div>
            <Label>Street Address</Label>
            <Input {...register('street')} placeholder="Your Street" />
            {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
          </div>

          <div>
            <Label>City</Label>
            <Input {...register('city')} placeholder="Your City" />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>

          <div>
            <Label>Zip Code</Label>
            <Input {...register('zip')} placeholder="12345" />
            {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
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
