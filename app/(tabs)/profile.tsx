import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { User, Settings, CreditCard, MapPin, Bell, Shield, CircleHelp as HelpCircle, Star, Calendar, ChevronRight, CreditCard as Edit3 } from 'lucide-react-native';

export default function ProfileScreen() {
  const profileStats = [
    { label: 'Bookings', value: '12' },
    { label: 'Reviews', value: '8' },
    { label: 'Rating', value: '4.8' },
  ];

  const menuItems = [
    {
      icon: Edit3,
      title: 'Edit Profile',
      subtitle: 'Update your personal information',
      onPress: () => console.log('Edit Profile'),
    },
    {
      icon: MapPin,
      title: 'Addresses',
      subtitle: 'Manage your saved locations',
      onPress: () => console.log('Addresses'),
    },
    {
      icon: CreditCard,
      title: 'Payment Methods',
      subtitle: 'M-Pesa, Cards & Billing',
      onPress: () => console.log('Payment Methods'),
    },
    {
      icon: Bell,
      title: 'Notifications',
      subtitle: 'Booking updates & preferences',
      onPress: () => console.log('Notifications'),
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      subtitle: 'Account security settings',
      onPress: () => console.log('Privacy & Security'),
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      subtitle: 'Get help or contact us',
      onPress: () => console.log('Help & Support'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Settings size={24} color="#6B7280" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=200'
              }}
              style={styles.profileImage}
            />
            <View style={styles.onlineIndicator} />
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Sarah Mwangi</Text>
            <Text style={styles.profileEmail}>sarah.mwangi@email.com</Text>
            <Text style={styles.profileLocation}>Nairobi, Kenya</Text>
          </View>

          <TouchableOpacity style={styles.editButton}>
            <Edit3 size={16} color="#059669" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          {profileStats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionButton}>
            <Calendar size={20} color="#059669" strokeWidth={2} />
            <Text style={styles.quickActionText}>My Bookings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickActionButton}>
            <Star size={20} color="#059669" strokeWidth={2} />
            <Text style={styles.quickActionText}>Favorites</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && styles.menuItemLast
              ]}
              onPress={item.onPress}
            >
              <View style={styles.menuItemIcon}>
                <item.icon size={20} color="#6B7280" strokeWidth={2} />
              </View>
              
              <View style={styles.menuItemContent}>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
                <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
              </View>
              
              <ChevronRight size={20} color="#D1D5DB" strokeWidth={2} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Become a Provider */}
        <View style={styles.providerCard}>
          <View style={styles.providerContent}>
            <Text style={styles.providerTitle}>Become a Service Provider</Text>
            <Text style={styles.providerSubtitle}>
              Start earning by offering your services to customers near you
            </Text>
          </View>
          <TouchableOpacity style={styles.providerButton}>
            <Text style={styles.providerButtonText}>Join Now</Text>
          </TouchableOpacity>
        </View>

        {/* Version Info */}
        <View style={styles.versionInfo}>
          <Text style={styles.versionText}>FundiBook v1.0.0</Text>
        </View>

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
  settingsButton: {
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
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 4,
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  profileLocation: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#059669',
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
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
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#059669',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1F2937',
    marginLeft: 8,
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 4,
  },
  menuItemSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  providerCard: {
    backgroundColor: '#059669',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  providerContent: {
    flex: 1,
  },
  providerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  providerSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#D1FAE5',
    lineHeight: 20,
  },
  providerButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  providerButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#059669',
  },
  versionInfo: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  versionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9CA3AF',
  },
  bottomPadding: {
    height: 32,
  },
});