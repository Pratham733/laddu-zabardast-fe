// src/routes/auth.ts

import { apiClient } from './apiClient';

export interface LoginResponse {
  token: string;
  user: any;
  message?: string;
}

export interface SignupResponse {
  token?: string;
  user?: any;
  message?: string;
}

export async function login(data: any, signal?: AbortSignal): Promise<LoginResponse> {
  return apiClient('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
    signal,
  });
}

export async function signup(data: any): Promise<SignupResponse> {
  return apiClient('/api/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getMe(token: string): Promise<any> {
  return apiClient('/api/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateProfile(data: any): Promise<any> {
  return apiClient('/api/update-profile', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function changePassword(data: any): Promise<any> {
  return apiClient('/api/change-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
