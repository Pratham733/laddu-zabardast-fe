// src/routes/orders.ts

import { apiClient } from './apiClient';

export interface GetOrdersResponse {
  orders: any[];
}

export async function getOrders(email?: string): Promise<GetOrdersResponse> {
  const params: Record<string, string> = {};
  if (email) {
    params.email = email;
  }
  return apiClient('/api/orders', {
    method: 'GET',
    params,
  });
}

export async function getOrderById(orderId: string): Promise<any> {
  return apiClient(`/api/orders/${orderId}`, {
    method: 'GET',
  });
}

export async function createOrder(orderData: any): Promise<{ orderId: string }> {
  return apiClient('/api/create-order', {
    method: 'POST',
    body: JSON.stringify(orderData),
  });
}

export async function updateOrderStatus(orderId: string, status: string): Promise<any> {
  return apiClient('/api/orders', {
    method: 'PATCH',
    body: JSON.stringify({ orderId, status }),
  });
}

export async function updatePaymentStatus(orderId: string, paymentStatus: 'completed' | 'paid'): Promise<any> {
  return apiClient('/api/orders', {
    method: 'PATCH',
    body: JSON.stringify({ orderId, paymentStatus }),
  });
}

export async function generateInvoice(orderId: string): Promise<Response> {
  return apiClient(`/api/generate-invoice`, {
    method: 'GET',
    params: { orderId },
    responseType: 'response',
  });
}
