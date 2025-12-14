import { Home, Camera, Wand2, IndianRupee } from 'lucide-react';
import { Vendor, VendorCategory } from '../types';

export const CITIES = [
  { name: 'Nizamabad', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600&h=400', label: 'Historical Forts' },
  { name: 'Warangal', image: 'https://images.unsplash.com/photo-1598979339463-b1d5f36e4f9b?auto=format&fit=crop&q=80&w=600&h=400', label: 'Cultural Capital' },
  { name: 'Karimnagar', image: 'https://images.unsplash.com/photo-1626544827763-d516dce335ca?auto=format&fit=crop&q=80&w=600&h=400', label: 'City of Granites' }, 
  { name: 'Kamareddy', image: 'https://images.unsplash.com/photo-1582560475093-4531852d4dc8?auto=format&fit=crop&q=80&w=600&h=400', label: 'Heritage & Agriculture' },
];

export const CATEGORIES = [
  { name: 'Venue', icon: Home, color: 'text-orange-600', bg: 'bg-orange-100', keywords: ['Banquet', 'Hall', 'Resort', 'Palace', 'Garden'] },
  { name: 'Photography', icon: Camera, color: 'text-blue-600', bg: 'bg-blue-100', keywords: ['Studio', 'Captures', 'Films', 'Lens', 'Moments'] },
  { name: 'Makeup', icon: Wand2, color: 'text-rose-600', bg: 'bg-rose-100', keywords: ['Makeover', 'Artistry', 'Glamour', 'Beauty', 'Looks'] },
  { name: 'Decor', icon: IndianRupee, color: 'text-yellow-600', bg: 'bg-yellow-100', keywords: ['Events', 'Decor', 'Designs', 'Creations', 'Styling'] },
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
    ]
  };

  let idCounter = 1;

  CITIES.forEach(city => {
    CATEGORIES.forEach(cat => {
      // 5 vendors per category per city
      for (let i = 0; i < 5; i++) {
        const keyword = cat.keywords[i] || cat.keywords[0];
        const basePrice = cat.name === 'Venue' ? 50000 : cat.name === 'Photography' ? 25000 : cat.name === 'Makeup' ? 15000 : 30000;
        
        vendors.push({
          id: String(idCounter++),
          name: `${city.name} ${keyword} ${i % 2 === 0 ? 'Royale' : 'Elite'}`,
          category: cat.name as VendorCategory,
          city: city.name,
          rating: 4.0 + Number((Math.random() * 1.0).toFixed(1)),
          reviewCount: Math.floor(Math.random() * 200) + 10,
          priceStart: basePrice + (Math.floor(Math.random() * 20) * 1000),
          imageUrl: images[cat.name as keyof typeof images][i % 4],
          verified: Math.random() > 0.4
        });
      }
    });
  });

  return vendors;
};

export const ALL_VENDORS = generateVendors();

