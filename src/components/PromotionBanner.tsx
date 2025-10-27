import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Promotion } from '@/types';
import { COLORS, BORDER_RADIUS } from '@/constants';
import { mockPromotions } from '@/constants';

export function PromotionBanner() {
  const renderPromotion = (promo: Promotion, index: number) => (
    <TouchableOpacity key={promo.id} style={styles.banner}>
      <Image source={{ uri: promo.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.overlay}>
        <Text style={styles.title}>{promo.title}</Text>
        <Text style={styles.subtitle}>{promo.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {mockPromotions.map(renderPromotion)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  banner: {
    flex: 1,
    height: 120,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(249, 115, 22, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
  },
});

