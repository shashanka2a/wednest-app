import { Home, Camera, Wand2, IndianRupee, Utensils, Palette } from 'lucide-react';
import { Vendor, VendorCategory } from '../types';

export const CITIES = [
  { name: 'Nizamabad', image: '/nzb.png', label: 'Historical Forts' },
  { name: 'Warangal', image: '/wrngl.png', label: 'Cultural Capital' },
  { name: 'Karimnagar', image: '/krnmngr.png', label: 'City of Granites' }, 
  { name: 'Kamareddy', image: '/kmrdy.png', label: 'Heritage & Agriculture' },
];

export const CATEGORIES = [
  { name: 'Venue', icon: Home, color: 'text-orange-600', bg: 'bg-orange-100', keywords: ['Banquet', 'Hall', 'Resort', 'Palace', 'Garden'] },
  { name: 'Photography', icon: Camera, color: 'text-blue-600', bg: 'bg-blue-100', keywords: ['Studio', 'Captures', 'Films', 'Lens', 'Moments'] },
  { name: 'Makeup', icon: Wand2, color: 'text-rose-600', bg: 'bg-rose-100', keywords: ['Makeover', 'Artistry', 'Glamour', 'Beauty', 'Looks'] },
  { name: 'Decor', icon: IndianRupee, color: 'text-yellow-600', bg: 'bg-yellow-100', keywords: ['Events', 'Decor', 'Designs', 'Creations', 'Styling'] },
  { name: 'Catering', icon: Utensils, color: 'text-green-600', bg: 'bg-green-100', keywords: ['Veg', 'Non-Veg', 'Buffet', 'Plated', 'Service'] },
  { name: 'Designers', icon: Palette, color: 'text-purple-600', bg: 'bg-purple-100', keywords: ['Invitations', 'Posters', 'Websites', 'Graphics', 'Branding'] },
];

// Helper to generate consistent mock data
export const generateVendors = (): Vendor[] => {
  const vendors: Vendor[] = [];
  const images = {
    Venue: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1561582239-014ae9598285?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800'
    ],
    Photography: [
      'https://images.unsplash.com/photo-1606103920295-9a091573f160?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1520854221250-7c9377d359ce?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
    ],
    Makeup: [
      'https://images.unsplash.com/photo-1487412947132-26c5c112a118?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512288094938-07aa22149e32?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=800'
    ],
    Decor: [
      'https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1478146896981-b80c463e4381?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80&w=800'
    ],
    Catering: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800'
    ],
    Designers: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586717791821-3f9a7379a90d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800'
    ]
  };

  let idCounter = 1;

  CITIES.forEach(city => {
    CATEGORIES.forEach(cat => {
      // 5 vendors per category per city
      for (let i = 0; i < 5; i++) {
        const keyword = cat.keywords[i] || cat.keywords[0];
        const basePrice = cat.name === 'Venue' ? 50000 : cat.name === 'Photography' ? 25000 : cat.name === 'Makeup' ? 15000 : cat.name === 'Catering' ? 40000 : cat.name === 'Designers' ? 20000 : 30000;
        
        vendors.push({
          id: String(idCounter++),
          name: `${city.name} ${keyword} ${i % 2 === 0 ? 'Royale' : 'Elite'}`,
          category: cat.name as VendorCategory,
          city: city.name,
          rating: 4.0 + Number((Math.random() * 1.0).toFixed(1)),
          reviewCount: Math.floor(Math.random() * 200) + 10,
          priceStart: basePrice + (Math.floor(Math.random() * 20) * 1000),
          imageUrl: images[cat.name as keyof typeof images]?.[i % 4] || images.Venue[i % 4],
          verified: Math.random() > 0.4
        });
      }
    });
  });

  return vendors;
};

// Real Nizamabad Venues
export const NIZAMABAD_REAL_VENUES: Vendor[] = [
  {
    id: 'nzb-1',
    name: 'G Convention',
    category: VendorCategory.VENUE,
    city: 'Nizamabad',
    rating: 4.5,
    reviewCount: 128,
    priceStart: 65000,
    imageUrl: '/venues/g-convention.png',
    verified: true,
  },
  {
    id: 'nzb-2',
    name: 'Sri Rama Gardens',
    category: VendorCategory.VENUE,
    city: 'Nizamabad',
    rating: 4.7,
    reviewCount: 95,
    priceStart: 58000,
    imageUrl: '/venues/srirama.png',
    verified: true,
  },
  {
    id: 'nzb-3',
    name: 'Bhooma Reddy Convention Centre',
    category: VendorCategory.VENUE,
    city: 'Nizamabad',
    rating: 4.4,
    reviewCount: 87,
    priceStart: 68000,
    imageUrl: '/venues/bhoomareddy.png',
    verified: true,
  },
  {
    id: 'nzb-4',
    name: 'Sri Kanyaka Parameshwari Kalyana Mandapam',
    category: VendorCategory.VENUE,
    city: 'Nizamabad',
    rating: 4.8,
    reviewCount: 203,
    priceStart: 55000,
    imageUrl: '/venues/sri-kanyaka.png',
    verified: true,
  },
];

export const ALL_VENDORS = generateVendors();

