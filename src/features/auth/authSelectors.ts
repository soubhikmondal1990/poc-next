import { RootState } from '@/store/store';

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectAuthError = (state: RootState) => state.auth.error;
