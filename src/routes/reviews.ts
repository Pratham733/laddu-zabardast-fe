import { apiClient } from './apiClient';
import type { Review } from '@/types/review';

export async function getProductReviews(productId: string): Promise<{ reviews: Review[] }> {
  return apiClient(`/api/products/${productId}/reviews`, {
    method: 'GET',
  });
}

export async function submitReview(productId: string, formState: { rating: number; comment: string }): Promise<{ review: Review }> {
  return apiClient(`/api/products/${productId}/reviews`, {
    method: 'POST',
    body: JSON.stringify(formState),
  });
}

export async function updateReview(productId: string, reviewId: string, formState: { rating: number; comment: string }): Promise<{ review: Review }> {
  return apiClient(`/api/products/${productId}/reviews/${reviewId}`, {
    method: 'PUT',
    body: JSON.stringify(formState),
  });
}

// Support alternative `/api/reviews` endpoints if used in some parts of the codebase:
export async function submitReviewLegacy(formState: any): Promise<Review> {
  return apiClient('/api/reviews', {
    method: 'POST',
    body: JSON.stringify(formState),
  });
}

export async function updateReviewLegacy(reviewId: string, formState: any): Promise<Review> {
  return apiClient(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    body: JSON.stringify(formState),
  });
}

export async function deleteReview(reviewId: string): Promise<any> {
  return apiClient(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
  });
}

export async function pinReview(reviewId: string, pin: boolean): Promise<any> {
  return apiClient(`/api/reviews/${reviewId}`, {
    method: 'PATCH',
    body: JSON.stringify({ pinned: pin }),
  });
}
