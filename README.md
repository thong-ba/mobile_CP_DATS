# Night Mobile - Expo TypeScript App

A modern mobile application built with Expo, React Native, and TypeScript following professional project structure.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo Go app (for testing on physical devices)

### Installation

```bash
# Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
npm start

# Run on specific platforms
npm run android    # Android
npm run ios        # iOS (requires macOS)
npm run web        # Web browser
```

## 📁 Project Structure

```
nightmobile/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Screen components
│   ├── navigation/     # Navigation configuration
│   ├── services/       # API services & business logic
│   ├── utils/          # Helper functions & utilities
│   ├── hooks/          # Custom React hooks
│   ├── types/          # TypeScript type definitions
│   ├── constants/      # App constants & configuration
│   ├── store/          # State management
│   └── App.tsx         # Main App component
├── assets/             # Images, fonts, and other assets
├── App.tsx             # Root App entry point
├── package.json
├── tsconfig.json       # TypeScript configuration
└── README.md
```

## 🎯 Features

- ✅ TypeScript for type safety
- ✅ Professional folder structure
- ✅ Path aliases configured (@/ path imports)
- ✅ Modern React Native patterns
- ✅ Expo SDK 54+
- ✅ Cross-platform support (iOS, Android, Web)

## 📝 Development Guidelines

### Adding New Screens

Create files in `src/screens/`:

```typescript
// src/screens/NewScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function NewScreen() {
  return (
    <View style={styles.container}>
      <Text>New Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

Then export in `src/screens/index.ts`:

```typescript
export * from './NewScreen';
```

### Adding Components

Create reusable components in `src/components/`:

```typescript
// src/components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { /* ... */ },
  buttonText: { /* ... */ },
});
```

### Using Path Aliases

Import using configured aliases:

```typescript
import { Button } from '@/components';
import { HomeScreen } from '@/screens';
import { COLORS } from '@/constants';
```

## 🔧 Configuration

### TypeScript

Path aliases are configured in `tsconfig.json` and `babel.config.js`.

### App Configuration

Edit `app.json` for app metadata, splash screens, icons, etc.

## 📦 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator (macOS only)
- `npm run web` - Run in web browser

## 🛠 Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Package Manager**: npm
- **State Management**: (Add as needed - Redux, Zustand, etc.)
- **Navigation**: (Add as needed - React Navigation, Expo Router, etc.)

## 📄 License

Private project

## 👥 Authors

Your Name

