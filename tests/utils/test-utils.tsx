import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import i18nReducer from '@/features/i18n/i18nSlice';

export function renderWithProviders(ui: React.ReactElement) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      i18n: i18nReducer,
    },
  });

  return {
    store,
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}
