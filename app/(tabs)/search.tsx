import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Search, Filter, SlidersHorizontal } from 'lucide-react-native';
import ServiceProviderCard from '@/components/ServiceProviderCard';
import { serviceProviders, serviceCategories } from '@/data/mockData';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProviders = serviceProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || provider.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Services</Text>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={20} color="#059669" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#6B7280" strokeWidth={2} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search providers, services, skills..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Category Filter */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoryFilter}
        contentContainerStyle={styles.categoryFilterContent}
      >
        <TouchableOpacity
          style={[
            styles.categoryChip,
            !selectedCategory && styles.categoryChipActive
          ]}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={[
            styles.categoryChipText,
            !selectedCategory && styles.categoryChipTextActive
          ]}>
            All
          </Text>
        </TouchableOpacity>
        
        {serviceCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryChip,
              selectedCategory === category.name && styles.categoryChipActive
            ]}
            onPress={() => setSelectedCategory(
              selectedCategory === category.name ? null : category.name
            )}
          >
            <Text style={[
              styles.categoryChipText,
              selectedCategory === category.name && styles.categoryChipTextActive
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Results */}
      <ScrollView style={styles.resultsContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsCount}>
            {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''} found
          </Text>
        </View>

        {filteredProviders.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateTitle}>No providers found</Text>
            <Text style={styles.emptyStateText}>
              Try adjusting your search or filters to find what you're looking for.
            </Text>
          </View>
        ) : (
          filteredProviders.map((provider) => (
            <ServiceProviderCard
              key={provider.id}
              provider={provider}
              onPress={() => {
                console.log('Navigate to provider:', provider.name);
              }}
            />
          ))
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
  filterButton: {
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
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
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
  categoryFilter: {
    maxHeight: 60,
    marginBottom: 16,
  },
  categoryFilterContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  categoryChipActive: {
    backgroundColor: '#059669',
    borderColor: '#059669',
  },
  categoryChipText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#6B7280',
  },
  categoryChipTextActive: {
    color: '#FFFFFF',
  },
  resultsContainer: {
    flex: 1,
  },
  resultsHeader: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  resultsCount: {
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
  },
  bottomPadding: {
    height: 32,
  },
});