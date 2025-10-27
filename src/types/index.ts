export * from './common';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  sold?: number;
  stock?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Banner {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

