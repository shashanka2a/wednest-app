'use client';

import React from 'react';
import { Building2, BadgeCheck, Bot } from 'lucide-react';

export const AboutView = () => (
  <div className="min-h-screen bg-white">
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
       <span className="text-rose-500 font-bold tracking-wider text-sm uppercase mb-4 block">Our Mission</span>
       <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8">Democratizing Dream Weddings</h1>
       <p className="text-xl text-gray-600 leading-relaxed mb-12">
         WedNest was born from a simple observation: Wedding planning in Tier-2 and Tier-3 cities is chaotic, unorganized, and opaque. We are building the digital infrastructure to connect heritage and heartland India with world-class celebration standards.
       </p>
       <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-gray-50 rounded-2xl">
            <Building2 className="w-8 h-8 text-rose-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Local First</h3>
            <p className="text-gray-600">We prioritize local vendors in cities like Warangal, Nizamabad, and Karimnagar.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl">
            <BadgeCheck className="w-8 h-8 text-rose-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Verified Trust</h3>
            <p className="text-gray-600">Every vendor on our platform undergoes a physical verification process.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl">
            <Bot className="w-8 h-8 text-rose-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Tech Enabled</h3>
            <p className="text-gray-600">Using AI to help families budget better and find exactly what they need.</p>
          </div>
       </div>
    </div>
  </div>
);

