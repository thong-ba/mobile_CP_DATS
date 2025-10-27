import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '@/types';
import { COLORS, BORDER_RADIUS } from '@/constants';
import { mockFlashSaleProducts } from '@/constants';

export function FlashSaleSection() {
  const renderProduct = (product: Product, index: number) => {
    const discount = product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;
    
    const soldPercentage = product.sold && product.stock
      ? Math.round((product.sold / (product.sold + product.stock)) * 100)
      : 0;

    return (
      <TouchableOpacity key={product.id} style={styles.productCard}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>-{discount}%</Text>
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productName} numberOfLines={2}>
            {product.name}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {product.price.toLocaleString('vi-VN')}đ
            </Text>
            <Text style={styles.originalPrice}>
              {product.originalPrice?.toLocaleString('vi-VN')}đ
            </Text>
          </View>
          <View style={styles.soldContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${soldPercentage}%` }]} />
            </View>
            <Text style={styles.soldText}>Đã bán {product.sold || 0}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.emoji}>⚡</Text>
          <Text style={styles.title}>Flash Sale Hôm Nay</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>Xem tất cả →</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {mockFlashSaleProducts.map(renderProduct)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingVertical: 16,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  emoji: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  seeAll: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  productCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ffe4e1',
  },
  productImage: {
    width: '100%',
    height: 140,
    backgroundColor: COLORS.backgroundLight,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: COLORS.flashSale,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 6,
    minHeight: 36,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.flashSale,
  },
  originalPrice: {
    fontSize: 11,
    color: COLORS.textLight,
    textDecorationLine: 'line-through',
  },
  soldContainer: {
    gap: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.flashSale,
  },
  soldText: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },
});

