export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  likes: number;
  images: string[];
  link: string;
}