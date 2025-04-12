import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FormData = {
  fullName: string
  email: string
  phone: string
  street: string
  city: string
  zip: string
  username: string
  password: string
}

const initialState: FormData = {
  fullName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  zip: '',
  username: '',
  password: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload }
    },
    resetForm: () => initialState,
  },
})

export const { updateForm, resetForm } = formSlice.actions
export const formReducer = formSlice.reducer