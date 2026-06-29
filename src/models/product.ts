export interface Product {
  id?: string;
  _id?: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'laddu' | 'pickle';
  aiHint?: string;
  available?: boolean;  
}
