// src/routes/wishlist.ts

import { apiClient } from './apiClient';

export interface WishlistResponse {
  wishlist: any[];
}

export async function getWishlist(userId: string, token: string): Promise<WishlistResponse> {
  return apiClient(`/api/wishlist/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateWishlist(userId: string, wishlist: any[], token: string): Promise<any> {
  return apiClient(`/api/wishlist/${userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ items: wishlist }),
  });
}
