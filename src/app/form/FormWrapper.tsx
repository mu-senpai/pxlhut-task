'use client'

import { useState } from 'react'
import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'
import FormSummary from '@/components/FormSummary'
import { AnimatePresence } from 'framer-motion'

export default function FormWrapper() {
    const [step, setStep] = useState(1)

    const nextStep = () => setStep((prev) => prev + 1)
    const prevStep = () => setStep((prev) => prev - 1)
    const resetStep = () => setStep(1);

    return (
        <AnimatePresence mode="wait">
            {step === 1 && <StepOne onNext={nextStep} key="step1" />}
            {step === 2 && <StepTwo onNext={nextStep} onBack={prevStep} key="step2" />}
            {step === 3 && <StepThree onNext={nextStep} onBack={prevStep} key="step3" />}
            {step === 4 && <FormSummary onBack={prevStep} resetStep={resetStep} key="summary" />}
        </AnimatePresence>
    )
}