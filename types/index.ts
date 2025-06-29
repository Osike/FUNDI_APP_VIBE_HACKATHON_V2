export interface ServiceProvider {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  pricePerHour: number;
  location: string;
  imageUrl: string;
  verified: boolean;
  description: string;
  availability: string[];
  skills: string[];
}

export interface Booking {
  id: string;
  providerId: string;
  providerName: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  location: string;
  notes?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  isProvider: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  providerCount: number;
}