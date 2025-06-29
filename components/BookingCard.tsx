import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Booking } from '@/types';
import { Calendar, Clock, MapPin } from 'lucide-react-native';

interface BookingCardProps {
  booking: Booking;
  onPress: () => void;
}

export default function BookingCard({ booking, onPress }: BookingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '#10B981';
      case 'pending':
        return '#F59E0B';
      case 'completed':
        return '#6B7280';
      case 'cancelled':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.service}>{booking.service}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(booking.status) }]}>
          <Text style={styles.statusText}>{booking.status.toUpperCase()}</Text>
        </View>
      </View>
      
      <Text style={styles.providerName}>{booking.providerName}</Text>
      
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Calendar size={16} color="#6B7280" strokeWidth={2} />
          <Text style={styles.detailText}>{formatDate(booking.date)}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Clock size={16} color="#6B7280" strokeWidth={2} />
          <Text style={styles.detailText}>{booking.time} ({booking.duration}h)</Text>
        </View>
        
        <View style={styles.detailItem}>
          <MapPin size={16} color="#6B7280" strokeWidth={2} />
          <Text style={styles.detailText}>{booking.location}</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.price}>KES {booking.price.toLocaleString()}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  service: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#FFFFFF',
  },
  providerName: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#059669',
    marginBottom: 12,
  },
  details: {
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  price: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#1F2937',
  },
});