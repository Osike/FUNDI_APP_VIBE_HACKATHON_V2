import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ServiceProvider } from '@/types';
import { Star, MapPin, Shield } from 'lucide-react-native';

interface ServiceProviderCardProps {
  provider: ServiceProvider;
  onPress: () => void;
}

export default function ServiceProviderCard({ provider, onPress }: ServiceProviderCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: provider.imageUrl }} style={styles.image} />
        {provider.verified && (
          <View style={styles.verifiedBadge}>
            <Shield size={12} color="#FFFFFF" strokeWidth={2} />
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{provider.name}</Text>
          <View style={styles.ratingContainer}>
            <Star size={14} color="#F59E0B" fill="#F59E0B" strokeWidth={0} />
            <Text style={styles.rating}>{provider.rating}</Text>
            <Text style={styles.reviewCount}>({provider.reviewCount})</Text>
          </View>
        </View>
        
        <Text style={styles.category}>{provider.category}</Text>
        
        <View style={styles.locationContainer}>
          <MapPin size={14} color="#6B7280" strokeWidth={2} />
          <Text style={styles.location}>{provider.location}</Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.price}>KES {provider.pricePerHour}/hr</Text>
          <View style={styles.availability}>
            <View style={styles.availabilityDot} />
            <Text style={styles.availabilityText}>Available</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  verifiedBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#059669',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1F2937',
    marginLeft: 4,
  },
  reviewCount: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 2,
  },
  category: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#059669',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  location: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#1F2937',
  },
  availability: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availabilityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  availabilityText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#10B981',
  },
});