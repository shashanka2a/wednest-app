'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Search, MapPin, ArrowRight, Wand2, Bot, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { PopularCities } from './PopularCities';
import { CategoriesSection } from './CategoriesSection';
import { VendorCard } from './VendorCard';
import { ALL_VENDORS, CITIES, NIZAMABAD_REAL_VENUES } from '../lib/constants';
import { containerStagger, itemFadeUp } from '../lib/animations';

export const HomePage = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [selectedCity, setSelectedCity] = useState('Nizamabad');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchText) params.set('search', searchText);
    if (selectedCity) params.set('city', selectedCity);
    router.push(`/browse?${params.toString()}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-white px-4">
        {/* Background Image with center blur effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/bg.png)',
              opacity: 0.4,
              maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black 70%)',
            }}
          />
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1.5 px-4 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4 border border-orange-200"
            >
              Telangana's Most Trusted Wedding Network
            </motion.span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4 italic">
              Luxury Weddings, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700 pr-2">
                Local Prices.
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover top-rated venues and trusted vendors across Telangana. Transparent pricing, zero hidden fees.
            </p>

            {/* Search Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white p-3 rounded-2xl shadow-xl shadow-rose-100/50 max-w-4xl mx-auto flex flex-col md:flex-row gap-3 border border-rose-50"
            >
              <div className="flex-[1.5] flex items-center px-4 bg-gray-50 rounded-xl border border-transparent focus-within:bg-white focus-within:border-rose-300 transition-colors">
                <Search className="text-gray-400 w-5 h-5 mr-3" />
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full py-4 bg-transparent outline-none text-gray-700 placeholder-gray-400 font-medium"
                />
              </div>
              <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-xl border border-transparent focus-within:bg-white focus-within:border-rose-300 transition-colors">
                <MapPin className="text-gray-400 w-5 h-5 mr-3" />
                <select 
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full py-4 bg-transparent outline-none text-gray-700 font-medium appearance-none"
                >
                  <option value="">All Cities</option>
                  {CITIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(197, 140, 120, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSearch}
                className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap text-lg"
              >
                Search
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesSection />

      {/* Popular Cities */}
      <PopularCities />

      {/* Featured Vendors */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Top-Rated Venues in Nizamabad</h2>
              <p className="text-gray-600">Curated spaces loved by couples, verified for quality and price.</p>
            </div>
            <motion.button 
              whileHover={{ x: 5 }}
              onClick={() => router.push('/browse?city=Nizamabad')}
              className="hidden md:flex items-center text-rose-600 font-semibold hover:text-rose-700"
            >
              View All <ArrowRight className="ml-1" size={20} />
            </motion.button>
          </div>

          <motion.div 
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {NIZAMABAD_REAL_VENUES.slice(0, 4).map(vendor => (
              <motion.div variants={itemFadeUp} key={vendor.id}>
                <VendorCard vendor={vendor} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Feature Teaser */}
      <section className="py-20 bg-gradient-to-br from-rose-900 to-rose-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-yellow-300 font-bold mb-4"
            >
              <Wand2 size={20} />
              <span>NEW FEATURE</span>
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-sans">Stop Guessing. Start Planning.</h2>
            <p className="text-rose-100 text-base md:text-lg mb-8 leading-relaxed">
              Unsure what a wedding in Warangal actually costs? Our AI analyzes real local market rates to give you an accurate breakdown instantly.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/ai')}
              className="bg-white text-rose-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-rose-50 transition flex items-center gap-2 text-base"
            >
              <Bot size={24} /> Calculate My Budget
            </motion.button>
          </div>
          <div className="md:w-5/12">
             <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl"
             >
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-rose-200">
                    <span>Total Budget</span>
                    <span className="text-white font-bold text-lg">₹ 8,00,000</span>
                  </div>
                  <div className="h-3 bg-rose-950/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-yellow-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-sm text-rose-200 mb-1">Venue (40%)</div>
                      <div className="font-bold text-lg">₹ 3.2 Lakhs</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-sm text-rose-200 mb-1">Food (30%)</div>
                      <div className="font-bold text-lg">₹ 2.4 Lakhs</div>
                    </div>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image 
                  src="/icon.svg" 
                  alt="WedNest Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-sans text-xl font-bold">WedNest</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Making dream weddings accessible. The most trusted wedding directory for Telangana's heartland.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-rose-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-rose-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-rose-400 transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Vendors</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-rose-400 transition">Vendor Login</a></li>
                <li><a href="#" className="hover:text-rose-400 transition">List Your Business</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0" />
                  <span>Nizamabad, Telangana</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>hello@wednest.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2024 WedNest India Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

