// Mock data for development
import { Product, Category, Banner } from '@/types';

export const mockBanners: Banner[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800',
    title: 'Sony XB43 Speakers',
    description: 'Premium Audio Experience',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
    title: 'JBL PartyBox',
    description: 'Perfect for Parties',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
    title: 'Bose Soundbar',
    description: 'Cinema at Home',
  },
];

export const mockCategories = [
  { id: '1', name: 'Loa Bluetooth', icon: '📱' },
  { id: '2', name: 'Loa Karaoke', icon: '🎤' },
  { id: '3', name: 'Loa Soundbar', icon: '🔊' },
  { id: '4', name: 'Tai nghe', icon: '🎧' },
  { id: '5', name: 'Ampli', icon: '🎛️' },
  { id: '6', name: 'Phụ kiện', icon: '🔌' },
  { id: '7', name: 'Loa Studio', icon: '🎚️' },
  { id: '8', name: 'Microphone', icon: '🎙️' },
];

export const mockFlashSaleProducts: Product[] = [
  {
    id: '1',
    name: 'Sony XB43 Bluetooth Speaker',
    price: 8900000,
    originalPrice: 12000000,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400',
    rating: 4.8,
    sold: 75,
    stock: 25,
  },
  {
    id: '2',
    name: 'JBL Flip 6 Portable',
    price: 4900000,
    originalPrice: 6800000,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    rating: 4.6,
    sold: 120,
    stock: 30,
  },
  {
    id: '3',
    name: 'Bose SoundLink Max',
    price: 15900000,
    originalPrice: 21000000,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400',
    rating: 4.9,
    sold: 45,
    stock: 15,
  },
  {
    id: '4',
    name: 'Marshall Acton III',
    price: 7200000,
    originalPrice: 9500000,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    rating: 4.7,
    sold: 88,
    stock: 42,
  },
];

export const mockRecommendedProducts: Product[] = [
  {
    id: '5',
    name: 'Apple AirPods Pro',
    price: 6900000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
    rating: 4.8,
  },
  {
    id: '6',
    name: 'Samsung Galaxy Buds',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
    rating: 4.5,
  },
  {
    id: '7',
    name: 'Sony WH-1000XM5',
    price: 12900000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.9,
  },
  {
    id: '8',
    name: 'Anker Soundcore',
    price: 2800000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.4,
  },
  {
    id: '9',
    name: 'Beats Fit Pro',
    price: 5500000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
    rating: 4.6,
  },
  {
    id: '10',
    name: 'Audio-Technica ATH-M50x',
    price: 4700000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.7,
  },
];

export const mockPromotions = [
  {
    id: '1',
    title: 'Giảm 20%',
    subtitle: 'Loa Sony',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600',
  },
  {
    id: '2',
    title: 'Miễn phí vận chuyển',
    subtitle: 'Nội thành',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600',
  },
];

