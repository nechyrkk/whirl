import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mobileMenuOpen: false,
  email: '',
  loading: false,
  notification: null,
  activeAccordion: 0,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setActiveAccordion: (state, action) => {
      state.activeAccordion = action.payload
    },
  },
})

export const {
  toggleMobileMenu,
  closeMobileMenu,
  setEmail,
  setActiveAccordion,
} = uiSlice.actions

export default uiSlice.reducer

export const selectMobileMenuOpen = (state) => state.ui.mobileMenuOpen
export const selectEmail = (state) => state.ui.email
export const selectActiveAccordion = (state) => state.ui.activeAccordion // ДОБАВЬТЕ ЭТУ СТРОКУ