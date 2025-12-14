'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../lib/constants';

const categoryImages: Record<string, string> = {
  'Venue': 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400',
  'Photography': 'https://images.unsplash.com/photo-1606103920295-9a091573f160?auto=format&fit=crop&q=80&w=400',
  'Makeup': 'https://images.unsplash.com/photo-1487412947132-26c5c112a118?auto=format&fit=crop&q=80&w=400',
  'Decor': 'https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=400',
  'Catering': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400',
};

const categoryDescriptions: Record<string, string> = {
  'Venue': 'Banquet Halls, Marriage Garden / Lawn',
  'Photography': 'Candid, Pre-wedding, Wedding',
  'Makeup': 'Bridal Makeup Artists, Family Makeup',
  'Decor': 'Wedding Planners, Decorators',
  'Catering': 'Veg, Non-Veg, Buffet Service',
};

export const CategoriesSection = () => {
  const router = useRouter();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Wedding Categories</h2>
            <p className="text-gray-600 mt-2">Find everything you need for your special day</p>
          </div>
          <motion.button
            whileHover={{ x: 3 }}
            onClick={() => router.push('/browse')}
            className="text-rose-600 font-medium hover:text-rose-700 flex items-center gap-1 text-sm md:text-base"
          >
            View all Categories
            <ChevronDown size={16} className="rotate-[-90deg]" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((category, index) => {
            const bgColors = [
              'bg-blue-50',
              'bg-orange-50',
              'bg-rose-50',
              'bg-yellow-50',
              'bg-green-50',
            ];
            const borderColors = [
              'border-blue-200',
              'border-orange-200',
              'border-rose-200',
              'border-yellow-200',
              'border-green-200',
            ];

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={() => router.push(`/browse?category=${category.name}`)}
                className={`${bgColors[index % bgColors.length]} ${borderColors[index % borderColors.length]} border rounded-2xl p-5 cursor-pointer transition-all shadow-sm hover:shadow-md relative overflow-hidden group`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                      <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {categoryDescriptions[category.name] || `${category.name} services`}
                    </p>
                  </div>
                  <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    <Image
                      src={categoryImages[category.name] || categoryImages['Venue']}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="80px"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

