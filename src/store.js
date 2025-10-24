import { configureStore, createSlice } from '@reduxjs/toolkit';

// UI Slice для управления состоянием UI
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    mobileMenuOpen: false,
    activeSection: 'hero',
    scrollPosition: 0,
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload;
    },
  },
});

// Newsletter Slice для управления подпиской
const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState: {
    email: '',
    isSubscribed: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    subscribeStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    subscribeSuccess: (state) => {
      state.isLoading = false;
      state.isSubscribed = true;
      state.email = '';
    },
    subscribeFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Theme Slice для темной/светлой темы (опционально)
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light', // 'light' или 'dark'
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setActiveSection, setScrollPosition } = uiSlice.actions;
export const { setEmail, subscribeStart, subscribeSuccess, subscribeFailure } = newsletterSlice.actions;
export const { toggleTheme } = themeSlice.actions;

// Configure store
export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    newsletter: newsletterSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export default store;
