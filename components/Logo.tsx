'use client';

import React from 'react';
import Image from 'next/image';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src="/icon.svg" 
        alt="WedNest Logo" 
        width={40} 
        height={40}
        className="w-10 h-10"
      />
      <span className="font-sans text-2xl font-bold text-gray-800 tracking-tight">
        Wed<span className="text-rose-500">nest</span>
      </span>
    </div>
  );
};