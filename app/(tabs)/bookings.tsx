import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Calendar, Clock, Plus } from 'lucide-react-native';
import BookingCard from '@/components/BookingCard';
import { userBookings } from '@/data/mockData';

export default function BookingsScreen() {
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingBookings = userBookings.filter(
    booking => booking.status === 'confirmed' || booking.status === 'pending'
  );
  
  const pastBookings = userBookings.filter(
    booking => booking.status === 'completed' || booking.status === 'cancelled'
  );

  const currentBookings = selectedTab === 'upcoming' ? upcomingBookings : pastBookings;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="#FFFFFF" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'upcoming' && styles.tabActive
          ]}
          onPress={() => setSelectedTab('upcoming')}
        >
          <Text style={[
            styles.tabText,
            selectedTab === 'upcoming' && styles.tabTextActive
          ]}>
            Upcoming
          </Text>
          {upcomingBookings.length > 0 && (
            <View style={styles.tabBadge}>
              <Text style={styles.tabBadgeText}>{upcomingBookings.length}</Text>
            </View>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'past' && styles.tabActive
          ]}
          onPress={() => setSelectedTab('past')}
        >
          <Text style={[
            styles.tabText,
            selectedTab === 'past' && styles.tabTextActive
          ]}>
            Past
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bookings List */}
      <ScrollView style={styles.bookingsContainer} showsVerticalScrollIndicator={false}>
        {currentBookings.length === 0 ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyStateIcon}>
              {selectedTab === 'upcoming' ? (
                <Calendar size={48} color="#D1D5DB" strokeWidth={1.5} />
              ) : (
                <Clock size={48} color="#D1D5DB" strokeWidth={1.5} />
              )}
            </View>
            <Text style={styles.emptyStateTitle}>
              {selectedTab === 'upcoming' ? 'No upcoming bookings' : 'No past bookings'}
            </Text>
            <Text style={styles.emptyStateText}>
              {selectedTab === 'upcoming' 
                ? 'Book a service provider to get started!'
                : 'Your completed bookings will appear here.'
              }
            </Text>
            {selectedTab === 'upcoming' && (
              <TouchableOpacity style={styles.bookNowButton}>
                <Text style={styles.bookNowButtonText}>Book Now</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <>
            {selectedTab === 'upcoming' && (
              <View style={styles.nextBookingCard}>
                <Text style={styles.nextBookingTitle}>Next Booking</Text>
                <View style={styles.nextBookingDetails}>
                  <Text style={styles.nextBookingService}>
                    {upcomingBookings[0]?.service}
                  </Text>
                  <Text style={styles.nextBookingDate}>
                    {upcomingBookings[0]?.date} at {upcomingBookings[0]?.time}
                  </Text>
                </View>
              </View>
            )}
            
            {currentBookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onPress={() => {
                  console.log('Navigate to booking details:', booking.id);
                }}
              />
            ))}
          </>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1F2937',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#059669',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  tabActive: {
    backgroundColor: '#059669',
  },
  tabText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#6B7280',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  tabBadge: {
    backgroundColor: '#EF4444',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  tabBadgeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  bookingsContainer: {
    flex: 1,
  },
  nextBookingCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  nextBookingTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#3B82F6',
    marginBottom: 8,
  },
  nextBookingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextBookingService: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
  },
  nextBookingDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  emptyStateIcon: {
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 8,
  },
  emptyStateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  bookNowButton: {
    backgroundColor: '#059669',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  bookNowButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  bottomPadding: {
    height: 32,
  },
});