'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { resetForm } from '@/store/formSlice'
import { useState } from 'react'

export default function FormSummary({ onBack, resetStep }: { onBack: () => void, resetStep: () => void }) {
  const formData = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()

  const [showSuccess, setShowSuccess] = useState(false)

  const mutation = useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Submitted Data:', formData)

      dispatch(resetForm())
      setShowSuccess(true) // Open Success Modal
    }
  })

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Confirmation</h2>
          </CardHeader>
          <CardContent className="space-y-2">
            <div><strong>Full Name:</strong> {formData.fullName}</div>
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Phone:</strong> {formData.phone}</div>
            <div><strong>Street:</strong> {formData.street}</div>
            <div><strong>City:</strong> {formData.city}</div>
            <div><strong>Zip:</strong> {formData.zip}</div>
            <div><strong>Username:</strong> {formData.username}</div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Previous
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </motion.div>

      <Dialog open={showSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Form Submitted Successfully 🎉</DialogTitle>
          </DialogHeader>

          <Button className="w-full mt-4" variant="outline" onClick={() => {
            setShowSuccess(false)
            resetStep()
          }}>
            Go to Start
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}