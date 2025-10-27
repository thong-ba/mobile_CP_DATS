import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Header } from '@/components/Header';
import { BannerCarousel } from '@/components/BannerCarousel';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FlashSaleSection } from '@/components/FlashSaleSection';
import { PromotionBanner } from '@/components/PromotionBanner';
import { ProductCard } from '@/components/ProductCard';
import { BottomNav } from '@/components/BottomNav';
import { COLORS, mockRecommendedProducts } from '@/constants';

export function HomeScreen() {
  const [activeTab, setActiveTab] = useState('home');
  const scrollY = new Animated.Value(0);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const renderProduct = ({ item }: { item: typeof mockRecommendedProducts[0] }) => (
    <ProductCard product={item} />
  );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
        <Header cartCount={3} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Banner Carousel */}
        <BannerCarousel />

        {/* Categories Grid */}
        <View style={styles.section}>
          <CategoryGrid />
        </View>

        {/* Flash Sale Section */}
        <FlashSaleSection />

        {/* Promotions */}
        <PromotionBanner />

        {/* Recommended Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionEmoji}>🎧</Text>
              <Text style={styles.sectionTitle}>Gợi ý cho bạn</Text>
            </View>
            <Text style={styles.seeAll}>Xem tất cả →</Text>
          </View>

          <View style={styles.productsGrid}>
            {mockRecommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </View>
        </View>

        {/* Extra space for bottom nav */}
        <View style={{ height: 100 }} />
      </Animated.ScrollView>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  header: {
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    backgroundColor: COLORS.background,
    paddingVertical: 20,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionEmoji: {
    fontSize: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  seeAll: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 16,
  },
});

