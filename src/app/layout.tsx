import './globals.css'
import { ReactNode } from 'react'
import Providers from '@/components/Providers'
import ThemeWrapper from '@/components/ThemeWrapper'

export const metadata = {
  title: 'Multi-Step Form',
  description: 'Professional Multi-step Form built with Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[--color-background] text-[--color-foreground]">
        <Providers>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  )
}