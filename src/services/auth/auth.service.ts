import { axiosClient } from '@/api/client/axiosClient';
import { API_ENDPOINTS } from '@/api/endpoints/endpoints';

import { LoginRequest, LoginResponse } from './auth.types';

class AuthService {
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const response = await axiosClient.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      payload
    );

    return response.data;
  }
}

export const authService = new AuthService();
