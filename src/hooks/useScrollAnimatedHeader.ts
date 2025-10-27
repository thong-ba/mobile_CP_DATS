import { useState, useRef, useEffect } from 'react';
import { Animated, ScrollView } from 'react-native';

export function useScrollAnimatedHeader() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const height = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [60, 50],
    extrapolate: 'clamp',
  });

  return {
    animatedHeaderOpacity: opacity,
    animatedHeaderHeight: height,
    scrollY,
    setIsScrolling,
  };
}

