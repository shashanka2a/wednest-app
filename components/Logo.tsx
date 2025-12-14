'use client';

import React from 'react';
import { Heart } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 border-2 border-rose-500 rounded-full">
        <span className="font-serif text-2xl italic font-bold text-rose-500 pb-1">w</span>
        <Heart className="absolute -top-1 -right-1 w-4 h-4 text-rose-500 fill-rose-500" />
      </div>
      <span className="font-serif text-2xl font-bold text-gray-800 tracking-tight">
        Wed<span className="text-rose-500">nest</span>
      </span>
    </div>
  );
};