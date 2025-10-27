# Project Structure Guide

This document explains the purpose of each directory in the project.

## 📂 Directory Structure

```
nightmobile/
├── src/                    # Source code directory
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx     # Example button component
│   │   └── index.ts       # Barrel exports
│   │
│   ├── screens/            # Screen components
│   │   ├── HomeScreen.tsx # Example home screen
│   │   └── index.ts       # Barrel exports
│   │
│   ├── navigation/         # Navigation configuration
│   │   └── index.tsx      # Router/navigation setup
│   │
│   ├── services/           # API & business logic
│   │   ├── api.ts         # HTTP client & API calls
│   │   └── index.ts       # Barrel exports
│   │
│   ├── utils/             # Helper functions
│   │   ├── helpers.ts     # Utility functions
│   │   └── index.ts       # Barrel exports
│   │
│   ├── hooks/             # Custom React hooks
│   │   ├── useApi.ts      # API hook example
│   │   └── index.ts       # Barrel exports
│   │
│   ├── types/             # TypeScript definitions
│   │   ├── common.ts      # Shared types
│   │   └── index.ts       # Barrel exports
│   │
│   ├── constants/         # App constants
│   │   ├── index.ts       # Colors, dimensions, etc.
│   │
│   ├── store/             # State management
│   │   └── index.ts       # Redux/Zustand setup
│   │
│   └── App.tsx            # Main app component
│
├── assets/                # Static assets (images, fonts)
├── App.tsx                # Root entry point
├── babel.config.js        # Babel configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies & scripts
```

## 🎯 Purpose of Each Directory

### `src/components/`
- Reusable UI components (buttons, cards, inputs, etc.)
- Each component in its own file
- Use barrel exports via `index.ts`

**Example:**
```typescript
// src/components/Button.tsx
export function Button({ title, onPress }: ButtonProps) { ... }

// src/components/index.ts
export * from './Button';
```

### `src/screens/`
- Full screen components
- One screen per file
- Use barrel exports for easy importing

**Example:**
```typescript
// src/screens/ProfileScreen.tsx
export function ProfileScreen() { ... }

// Usage
import { ProfileScreen } from '@/screens';
```

### `src/services/`
- API calls and business logic
- HTTP client setup
- Data transformation
- Backend integration

**Example:**
```typescript
// src/services/api.ts
export const api = {
  get: <T>(endpoint: string) => ...,
  post: <T>(endpoint: string, data: any) => ...,
};
```

### `src/hooks/`
- Custom React hooks
- Shared logic that uses React hooks
- Reusable stateful logic

**Example:**
```typescript
// src/hooks/useApi.ts
export function useApi<T>(apiCall: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  // ... hook logic
  return { data, loading, error };
}
```

### `src/utils/`
- Pure utility functions
- Helper functions without React dependencies
- Common calculations and transformations

**Example:**
```typescript
// src/utils/helpers.ts
export function formatDate(date: Date): string { ... }
export function capitalize(str: string): string { ... }
```

### `src/types/`
- TypeScript type definitions
- Interfaces and type aliases
- Shared type definitions

**Example:**
```typescript
// src/types/common.ts
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

### `src/constants/`
- App-wide constants
- Colors, spacing, configuration
- Environment variables

**Example:**
```typescript
// src/constants/index.ts
export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  // ...
};
```

### `src/navigation/`
- Navigation setup
- Route definitions
- Deep linking configuration

### `src/store/`
- State management setup
- Redux, Zustand, or other state libraries
- Global state configuration

## 📦 Import Paths

Use configured path aliases for clean imports:

```typescript
// ✅ Good - using path aliases
import { Button } from '@/components';
import { HomeScreen } from '@/screens';
import { COLORS } from '@/constants';
import { useApi } from '@/hooks';

// ❌ Bad - relative imports
import { Button } from '../../components';
import { HomeScreen } from '../../../screens';
```

## 🚀 Adding New Features

1. **New Screen**: Create in `src/screens/` and export from index
2. **New Component**: Create in `src/components/` and export from index
3. **New API**: Add to `src/services/` folder
4. **New Hook**: Add to `src/hooks/` folder
5. **New Type**: Add to `src/types/` folder

Follow the existing pattern for consistency!

