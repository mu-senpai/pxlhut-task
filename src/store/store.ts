import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from './formSlice'
import { darkModeReducer } from './darkModeSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    darkMode: darkModeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch