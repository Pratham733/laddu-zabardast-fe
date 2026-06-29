import { apiClient } from "@/routes/apiClient";
import type { Product } from "@/models";
import type { ProductsResponse } from "@/packets";

export const getProducts = async (): Promise<ProductsResponse> => {
  return apiClient("/products", { method: "GET" });
};

export const getProductById = async (productId: string): Promise<{ product: Product }> => {
  return apiClient(`/products/${productId}`, { method: "GET" });
};
