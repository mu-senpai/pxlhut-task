'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useEffect } from 'react'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return <>{children}</>
}