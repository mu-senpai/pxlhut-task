import Container from '@/components/Container'
import FormWrapper from './FormWrapper'
import "../globals.css"
import ThemeToggle from '@/components/ThemeToggle'
import { useEffect } from 'react';

export default function FormPage() {

    useEffect(() => {
        const setFullHeight = () => {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        };

        setFullHeight();

        window.addEventListener('resize', setFullHeight);

        return () => {
            window.removeEventListener('resize', setFullHeight);
        };
    }, []);

    return (
        <section className='w-full h-[calc(var(--vh,1vh)*100)] relative flex flex-col items-center justify-center'>
            <ThemeToggle />
            <Container>
                <FormWrapper />
            </Container>
        </section>
    )
}
