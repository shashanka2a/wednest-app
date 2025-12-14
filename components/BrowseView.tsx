'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, MapPin, ChevronDown, Utensils, X, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { VendorCard } from './VendorCard';
import { ALL_VENDORS, CITIES, CATEGORIES } from '../lib/constants';
import { containerStagger, itemFadeUp } from '../lib/animations';

export const BrowseView = () => {
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get('search') || '');
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');

  // Filter Logic
  const filteredVendors = useMemo(() => {
    return ALL_VENDORS.filter(vendor => {
      const matchesSearch = vendor.name.toLowerCase().includes(searchText.toLowerCase()) || 
                            vendor.category.toLowerCase().includes(searchText.toLowerCase());
      const matchesCity = selectedCity ? vendor.city === selectedCity : true;
      const matchesCategory = selectedCategory ? vendor.category === selectedCategory : true;
      return matchesSearch && matchesCity && matchesCategory;
    });
  }, [searchText, selectedCity, selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Search Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#482822] py-8 md:py-14 px-4 sm:px-6 lg:px-8 shadow-lg relative overflow-hidden texture-overlay"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-sans leading-tight">Find Your Perfect <br className="md:hidden" /> Wedding Vendor</h1>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white p-1.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col md:flex-row gap-0"
          >
            <div className="flex-[2] relative bg-white rounded-lg md:rounded-l-lg md:rounded-r-none overflow-hidden group transition-colors">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <input 
                type="text" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search by name or category..." 
                className="w-full pl-12 pr-4 py-3 md:py-4 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 font-medium"
              />
              {searchText && (
                <button onClick={() => setSearchText('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10">
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="w-px bg-gray-200 hidden md:block self-stretch my-2"></div>

            <div className="flex-1 relative bg-white">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-12 pr-10 py-3 md:py-4 outline-none text-gray-700 bg-transparent appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <option value="">All Cities</option>
                {CITIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none z-10" />
            </div>

            <div className="w-px bg-gray-200 hidden md:block self-stretch my-2"></div>

            <div className="flex-1 relative bg-white">
              <Utensils className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-10 py-3 md:py-4 outline-none text-gray-700 bg-transparent appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <option value="">All Categories</option>
                {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none z-10" />
            </div>

            <div className="w-px bg-gray-200 hidden md:block self-stretch my-2"></div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-500 hover:bg-rose-600 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-colors shadow-md md:ml-2"
              aria-label="Search"
            >
              <Search size={20} className="text-white" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Category Pills */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm py-3 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
             {CATEGORIES.map(cat => (
               <motion.button
                  key={cat.name}
                  whileHover={{ scale: 1.05, backgroundColor: selectedCategory !== cat.name ? '#FDF8F5' : undefined }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(selectedCategory === cat.name ? '' : cat.name)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border transition-all flex items-center gap-2 ${
                    selectedCategory === cat.name 
                      ? 'bg-rose-600 text-white border-rose-600 shadow-md' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-rose-300 hover:bg-rose-50/50'
                  }`}
               >
                 {selectedCategory === cat.name && <Check size={14} />}
                 {cat.name}
               </motion.button>
             ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl md:text-2xl text-gray-900">
            {filteredVendors.length} Result{filteredVendors.length !== 1 ? 's' : ''} Found
            {selectedCity && <span className="text-gray-500 font-normal text-base md:text-lg ml-2">in {selectedCity}</span>}
          </h2>
          <select className="bg-transparent text-sm font-medium text-gray-600 outline-none cursor-pointer hover:text-rose-600">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Rating: High to Low</option>
          </select>
        </div>

        {filteredVendors.length > 0 ? (
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
          >
            {filteredVendors.map(vendor => (
              <motion.div variants={itemFadeUp} key={vendor.id}>
                <VendorCard vendor={vendor} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400 w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">No vendors found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setSearchText(''); setSelectedCity(''); setSelectedCategory(''); }}
              className="mt-6 text-rose-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

