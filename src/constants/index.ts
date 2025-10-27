import { Dimensions } from 'react-native';

// App constants and configuration
export const APP_NAME = 'Night Mobile';
export const APP_VERSION = '1.0.0';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export * from './mockData';

export const COLORS = {
  primary: '#007AFF',
  secondary: '#f97316', // Orange for Flash Sale
  accent: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: '#FFFFFF',
  backgroundLight: '#f9fafb',
  backgroundGradient: ['#f7f9fc', '#ffffff'],
  text: '#000000',
  textSecondary: '#666666',
  textLight: '#999999',
  border: '#e5e7eb',
  flashSale: '#f97316',
};

export const SCREEN_PADDING = 16;
export const BORDER_RADIUS = 12;
export const ICON_SIZE = 24;
export const HEADER_HEIGHT = 60;

