import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '@/services/auth';
import { LoginRequest, LoginResponse, AuthError } from './auth.types';

export const loginThunk = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  {
    rejectValue: AuthError;
  }
>('auth/login', async (payload, { rejectWithValue }) => {
  try {
    return await authService.login(payload);
  } catch (err) {
    return rejectWithValue({
      message: 'Login failed',
    });
  }
});
