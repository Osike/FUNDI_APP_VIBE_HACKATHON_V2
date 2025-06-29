import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Search, Bell, MapPin } from 'lucide-react-native';
import ServiceCategoryCard from '@/components/ServiceCategoryCard';
import ServiceProviderCard from '@/components/ServiceProviderCard';
import { serviceCategories, serviceProviders } from '@/data/mockData';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProviders = serviceProviders.filter(provider => provider.verified).slice(0, 3);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <MapPin size={20} color="#059669" strokeWidth={2} />
            <Text style={styles.locationText}>Nairobi, Kenya</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="#6B7280" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Find trusted service providers near you</Text>
          <Text style={styles.welcomeSubtitle}>Book verified fundis, cleaners, tutors & more</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#6B7280" strokeWidth={2} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for services..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Service Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Categories</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {serviceCategories.map((category) => (
              <ServiceCategoryCard
                key={category.id}
                category={category}
                onPress={() => {
                  // Navigate to category screen
                  console.log('Navigate to category:', category.name);
                }}
              />
            ))}
          </ScrollView>
        </View>

        {/* Featured Providers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Providers</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {featuredProviders.map((provider) => (
            <ServiceProviderCard
              key={provider.id}
              provider={provider}
              onPress={() => {
                // Navigate to provider details
                console.log('Navigate to provider:', provider.name);
              }}
            />
          ))}
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Verified Providers</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>10K+</Text>
              <Text style={styles.statLabel}>Happy Customers</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4.8</Text>
              <Text style={styles.statLabel}>Average Rating</Text>
            </View>
          </View>
        </View>
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
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 8,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  welcomeSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  welcomeTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#1F2937',
    lineHeight: 36,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 12,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1F2937',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  seeAllText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#059669',
  },
  categoriesContainer: {
    paddingHorizontal: 8,
  },
  statsSection: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  statsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#059669',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 16,
  },
});