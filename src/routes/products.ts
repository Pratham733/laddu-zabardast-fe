import { apiClient } from './apiClient';
import type { Product } from '@/models';
import type { ProductsResponse } from '@/packets';

export async function getProducts(): Promise<ProductsResponse> {
  return apiClient('/products', {
    method: 'GET',
  });
}

export async function getProductById(productId: string): Promise<{ product: Product }> {
  return apiClient(`/products/${productId}`, {
    method: 'GET',
  });
}

export async function addProduct(product: Omit<Product, 'id' | '_id'>): Promise<ProductsResponse> {
  return apiClient('/add-product', {
    method: 'POST',
    body: JSON.stringify(product),
  });
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<ProductsResponse> {
  return apiClient(`/add-product`, {
    method: 'PUT',
    params: { id },
    body: JSON.stringify(product),
  });
}

export async function deleteProduct(id: string): Promise<ProductsResponse> {
  return apiClient(`/add-product`, {
    method: 'DELETE',
    params: { id },
  });
}

export async function uploadProductImage(formData: FormData): Promise<{ url: string }> {
  return apiClient('/upload-product-image', {
    method: 'POST',
    body: formData,
  });
}
