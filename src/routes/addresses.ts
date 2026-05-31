import { apiClient } from './apiClient';
import type { Address } from '@/types/product';

export async function getAddresses(token?: string): Promise<{ addresses: Address[] }> {
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return apiClient('/api/addresses', {
    method: 'GET',
    headers,
  });
}

export async function saveAddress(address: Address, token?: string, method: 'POST' | 'PUT' = 'POST'): Promise<{ addresses: Address[] }> {
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return apiClient('/api/addresses', {
    method,
    headers,
    body: JSON.stringify(address),
  });
}

export async function deleteAddress(idx: number, token?: string): Promise<{ addresses: Address[] }> {
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return apiClient(`/api/addresses/${idx}`, {
    method: 'DELETE',
    headers,
  });
}
