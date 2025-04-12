'use client'

import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '@/store/darkModeSlice'
import { RootState } from '@/store/store'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)

  return (
    <div className='absolute top-5 right-5'>
        <Button variant="outline" size="icon" onClick={() => dispatch(toggleDarkMode())}>
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
    </div>
  )
}
