'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CITIES } from '../lib/constants';

export const PopularCities = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Cities</h2>
            <p className="text-gray-600 mt-2">Serving Tier-2 and Tier-3 cities across Telangana</p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-rose-600 font-medium hover:text-rose-700 flex items-center gap-1"
          >
            <Link href="/browse" className="flex items-center gap-1">
              View all cities <ArrowRight size={16} />
            </Link>
          </motion.button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x hide-scrollbar px-1">
          {CITIES.map((city) => (
            <Link key={city.name} href={`/browse?city=${city.name}`}>
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="snap-start shrink-0 w-72 h-48 relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image 
                  src={city.image} 
                  alt={city.name} 
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white font-bold text-xl drop-shadow-sm">{city.name}</h3>
                  <p className="text-white/90 text-xs drop-shadow-sm">{city.label}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

