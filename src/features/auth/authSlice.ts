import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './authThunks';

type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
};

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(loginThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = true;
      })

      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message ?? 'Unknown error';
      });
  },
});

export default authSlice.reducer;
