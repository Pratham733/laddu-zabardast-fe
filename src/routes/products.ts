// src/routes/products.ts

import { apiClient } from './apiClient';
import type { Product } from '@/types/product';

export interface ProductsResponse {
  products: Product[];
}

export async function getProducts(): Promise<ProductsResponse> {
  return apiClient('/api/add-product', {
    method: 'GET',
  });
}

export async function getProductById(productId: string): Promise<{ product: Product }> {
  return apiClient(`/api/products/${productId}`, {
    method: 'GET',
  });
}

export async function addProduct(product: Omit<Product, 'id' | '_id'>): Promise<ProductsResponse> {
  return apiClient('/api/add-product', {
    method: 'POST',
    body: JSON.stringify(product),
  });
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<ProductsResponse> {
  return apiClient(`/api/add-product`, {
    method: 'PUT',
    params: { id },
    body: JSON.stringify(product),
  });
}

export async function deleteProduct(id: string): Promise<ProductsResponse> {
  return apiClient(`/api/add-product`, {
    method: 'DELETE',
    params: { id },
  });
}

export async function uploadProductImage(formData: FormData): Promise<{ url: string }> {
  return apiClient('/api/upload-product-image', {
    method: 'POST',
    body: formData,
  });
}
