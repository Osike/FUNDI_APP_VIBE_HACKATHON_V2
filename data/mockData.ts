import { ServiceProvider, Booking, ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: '1',
    name: 'Cleaning',
    icon: 'sparkles',
    color: '#059669',
    providerCount: 45
  },
  {
    id: '2',
    name: 'Handyman',
    icon: 'wrench',
    color: '#3B82F6',
    providerCount: 32
  },
  {
    id: '3',
    name: 'Tutoring',
    icon: 'book-open',
    color: '#F59E0B',
    providerCount: 28
  },
  {
    id: '4',
    name: 'Plumbing',
    icon: 'droplets',
    color: '#06B6D4',
    providerCount: 19
  },
  {
    id: '5',
    name: 'Electrical',
    icon: 'zap',
    color: '#8B5CF6',
    providerCount: 24
  },
  {
    id: '6',
    name: 'Gardening',
    icon: 'leaf',
    color: '#10B981',
    providerCount: 16
  },
  {
    id: '7',
    name: 'Beauty',
    icon: 'heart',
    color: '#EC4899',
    providerCount: 22
  },
  {
    id: '8',
    name: 'Delivery',
    icon: 'truck',
    color: '#F97316',
    providerCount: 38
  }
];

export const serviceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Mary Wanjiku',
    category: 'Cleaning',
    rating: 4.9,
    reviewCount: 127,
    pricePerHour: 500,
    location: 'Westlands, Nairobi',
    imageUrl: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
    verified: true,
    description: 'Professional house cleaning service with 5+ years experience. Specializing in deep cleaning, laundry, and home organization.',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    skills: ['Deep Cleaning', 'Laundry', 'Organization', 'Window Cleaning']
  },
  {
    id: '2',
    name: 'John Mwangi',
    category: 'Handyman',
    rating: 4.8,
    reviewCount: 89,
    pricePerHour: 800,
    location: 'Kilimani, Nairobi',
    imageUrl: 'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=300',
    verified: true,
    description: 'Experienced handyman offering repairs, installations, and maintenance services. Quick, reliable, and affordable.',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    skills: ['Furniture Assembly', 'Wall Mounting', 'Door Repairs', 'Painting']
  },
  {
    id: '3',
    name: 'Grace Akinyi',
    category: 'Tutoring',
    rating: 4.9,
    reviewCount: 156,
    pricePerHour: 1200,
    location: 'Karen, Nairobi',
    imageUrl: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=300',
    verified: true,
    description: 'Mathematics and Science tutor with 8 years experience. Helping students from primary to university level achieve their goals.',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    skills: ['Mathematics', 'Physics', 'Chemistry', 'Primary Education']
  },
  {
    id: '4',
    name: 'David Kiprotich',
    category: 'Plumbing',
    rating: 4.7,
    reviewCount: 73,
    pricePerHour: 1000,
    location: 'Kasarani, Nairobi',
    imageUrl: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=300',
    verified: true,
    description: 'Licensed plumber with expertise in pipe repairs, installations, and emergency fixes. Available 24/7 for urgent issues.',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    skills: ['Pipe Repairs', 'Toilet Fixes', 'Water Heater', 'Emergency Service']
  },
  {
    id: '5',
    name: 'Agnes Mutindi',
    category: 'Beauty',
    rating: 4.8,
    reviewCount: 94,
    pricePerHour: 1500,
    location: 'Lavington, Nairobi',
    imageUrl: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=300',
    verified: true,
    description: 'Professional beautician offering home beauty services. Specializing in hair, makeup, nails, and skincare treatments.',
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    skills: ['Hair Styling', 'Makeup', 'Manicure', 'Facial Treatments']
  },
  {
    id: '6',
    name: 'Peter Otieno',
    category: 'Electrical',
    rating: 4.6,
    reviewCount: 61,
    pricePerHour: 900,
    location: 'Eastleigh, Nairobi',
    imageUrl: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=300',
    verified: false,
    description: 'Qualified electrician offering wiring, repairs, and installations. Safety-first approach with competitive pricing.',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    skills: ['Wiring', 'Socket Installation', 'Light Fixtures', 'Electrical Repairs']
  }
];

export const userBookings: Booking[] = [
  {
    id: '1',
    providerId: '1',
    providerName: 'Mary Wanjiku',
    service: 'House Cleaning',
    date: '2025-01-25',
    time: '09:00',
    duration: 4,
    price: 2000,
    status: 'confirmed',
    location: 'My Home - Kilimani',
    notes: 'Please bring your own cleaning supplies'
  },
  {
    id: '2',
    providerId: '3',
    providerName: 'Grace Akinyi',
    service: 'Math Tutoring',
    date: '2025-01-22',
    time: '14:00',
    duration: 2,
    price: 2400,
    status: 'pending',
    location: 'My Home - Karen'
  },
  {
    id: '3',
    providerId: '2',
    providerName: 'John Mwangi',
    service: 'Furniture Assembly',
    date: '2025-01-18',
    time: '10:00',
    duration: 3,
    price: 2400,
    status: 'completed',
    location: 'My Office - Westlands'
  }
];