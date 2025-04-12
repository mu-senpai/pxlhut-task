import Container from '@/components/Container'
import FormWrapper from './FormWrapper'
import "../globals.css"
import ThemeToggle from '@/components/ThemeToggle'

export default function FormPage() {
    return (
        <section className='w-full h-screen relative flex flex-col items-center justify-center'>
            <ThemeToggle />
            <Container>
                <FormWrapper />
            </Container>
        </section>
    )
}
