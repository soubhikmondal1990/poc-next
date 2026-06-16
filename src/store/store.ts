import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import i18nReducer from '@/features/i18n/i18nSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    i18n: i18nReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
