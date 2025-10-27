// Common TypeScript types and interfaces

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

