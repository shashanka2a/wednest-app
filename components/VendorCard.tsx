'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, MapPin, BadgeCheck } from 'lucide-react';
import { Vendor } from '../types';
import { motion } from 'framer-motion';

interface VendorCardProps {
  vendor: Vendor;
}

export const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-sm border border-rose-100 group cursor-pointer h-full flex flex-col overflow-hidden"
    >
      {/* Image Container with strict 4:3 aspect ratio */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        {!imageError ? (
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
              onError={() => setImageError(true)}
            />
          </motion.div>
        ) : (
          <div className="w-full h-full image-placeholder"></div>
        )}
        
        {vendor.verified && (
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-2.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-rose-600 shadow-md z-10 border border-white/50">
            <BadgeCheck size={12} className="fill-rose-500 text-white" />
            Verified
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-sm font-bold shadow-md z-10 border border-white/50">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          {vendor.rating} <span className="text-gray-500 font-normal text-xs">({vendor.reviewCount})</span>
        </div>
      </div>
      
      {/* Card Content with increased padding */}
      <div className="p-5 flex flex-col flex-grow min-w-0">
        {/* Title and Category */}
        <div className="mb-3 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 truncate group-hover:text-rose-600 transition-colors mb-1" title={vendor.name}>
            {vendor.name}
          </h3>
          <p className="text-rose-500 text-sm font-medium truncate">{vendor.category}</p>
        </div>
        
        {/* Location - visually subordinate */}
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
          <MapPin size={12} />
          <span>{vendor.city}</span>
        </div>
        
        {/* Price - decoupled at bottom */}
        <div className="flex items-end justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="text-xs text-gray-500 font-medium">Starting from</span>
          <span className="font-bold text-lg text-gray-900">₹{vendor.priceStart.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
};