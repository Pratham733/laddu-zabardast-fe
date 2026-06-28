// src/routes/cart.ts

import { apiClient } from './apiClient';

export interface CartResponse {
  items: any[];
}

export async function getCart(userId: string, token: string): Promise<CartResponse> {
  return apiClient(`/cart/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateCart(userId: string, items: any[], token: string): Promise<any> {
  return apiClient(`/cart/${userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ items }),
  });
}
