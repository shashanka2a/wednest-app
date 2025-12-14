'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <Link href="/" className="cursor-pointer">
            <Logo />
          </Link>
          
          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center space-x-1">
            <motion.button 
              whileHover={{ backgroundColor: '#fff1f2' }} 
              className={`px-4 py-2 rounded-full font-medium transition-colors ${isActive('/') ? 'text-rose-600 bg-rose-50' : 'text-gray-600'}`}
            >
              <Link href="/">Home</Link>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-1.5 ${isActive('/ai') ? 'text-rose-600 bg-rose-50' : 'text-gray-600 hover:text-rose-600'}`}
            >
              <Link href="/ai" className="flex items-center gap-1.5">
                <Wand2 size={16} /> Plan with AI
              </Link>
            </motion.button>

            <motion.button 
              whileHover={{ backgroundColor: '#fff1f2' }} 
              className={`px-4 py-2 rounded-full font-medium transition-colors ${isActive('/about') ? 'text-rose-600 bg-rose-50' : 'text-gray-600'}`}
            >
              <Link href="/about">About</Link>
            </motion.button>
          </div>

          {/* Desktop Actions - Right Aligned */}
          <div className="hidden md:flex items-center gap-6">
            <motion.a 
              href="#"
              whileHover={{ x: 2 }}
              className="text-gray-500 font-medium text-sm hover:text-rose-600 transition-colors hidden lg:block"
            >
              List your Business
            </motion.a>
            <div className="h-6 w-px bg-gray-200 hidden lg:block"></div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-600 transition shadow-lg shadow-rose-200/50"
            >
              <Link href="/account">Sign In</Link>
            </motion.button>
          </div>

          {/* Mobile: Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden absolute w-full z-50 shadow-xl left-0 top-16"
          >
            <div className="p-6 space-y-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left text-gray-800 font-medium py-3 border-b border-gray-50">Home</Link>
              <Link href="/ai" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left text-rose-600 font-bold py-3 border-b border-gray-50 flex items-center gap-2">
                <Wand2 size={18} /> Plan with AI
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left text-gray-600 font-medium py-3 border-b border-gray-50">About WedNest</Link>
              
              <div className="pt-4 space-y-3">
                <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-rose-500 text-white px-4 py-3 rounded-xl font-medium shadow-md text-center">Sign In / Sign Up</Link>
                <button className="w-full text-center text-gray-500 text-sm font-medium py-2">Vendor? List your business</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

