'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MapPin, BadgeCheck } from 'lucide-react';
import { Vendor } from '../types';
import { motion } from 'framer-motion';

interface VendorCardProps {
  vendor: Vendor;
}

export const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  return (
    <motion.div 
      whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-sm border border-rose-100 group cursor-pointer h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <motion.div 
          className="w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Image 
            src={vendor.imageUrl} 
            alt={vendor.name} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </motion.div>
        {vendor.verified && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-rose-600 shadow-sm z-10">
            <BadgeCheck size={14} className="fill-rose-100" />
            Verified
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold shadow-sm z-10">
          <Star size={14} className="text-gold-500 fill-gold-500" />
          {vendor.rating} <span className="text-gray-400 font-normal text-xs">({vendor.reviewCount})</span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-800 truncate group-hover:text-rose-600 transition-colors">{vendor.name}</h3>
            <p className="text-rose-500 text-sm font-medium">{vendor.category}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <MapPin size={14} />
          {vendor.city}
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <span className="text-xs text-gray-500">Starting from</span>
          <span className="font-bold text-gray-900">₹{vendor.priceStart.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
};