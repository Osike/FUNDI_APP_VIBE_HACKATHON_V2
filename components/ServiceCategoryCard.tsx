import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ServiceCategory } from '@/types';
import { 
  Sparkles, 
  Wrench, 
  BookOpen, 
  Droplets, 
  Zap, 
  Leaf, 
  Heart, 
  Truck 
} from 'lucide-react-native';

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  onPress: () => void;
}

const iconMap = {
  'sparkles': Sparkles,
  'wrench': Wrench,
  'book-open': BookOpen,
  'droplets': Droplets,
  'zap': Zap,
  'leaf': Leaf,
  'heart': Heart,
  'truck': Truck,
};

export default function ServiceCategoryCard({ category, onPress }: ServiceCategoryCardProps) {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Sparkles;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: `${category.color}15` }]}>
        <IconComponent size={24} color={category.color} strokeWidth={2} />
      </View>
      <Text style={styles.name}>{category.name}</Text>
      <Text style={styles.count}>{category.providerCount} providers</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    minWidth: 100,
    marginHorizontal: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 4,
  },
  count: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});