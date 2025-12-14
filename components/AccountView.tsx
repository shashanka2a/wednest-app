'use client';

import React from 'react';
import { User, Heart, FileText, Settings, LogOut, ArrowRight } from 'lucide-react';

export const AccountView = () => (
  <div className="min-h-screen bg-gray-50 pb-20">
    <div className="bg-white border-b border-gray-100 pt-10 pb-6 px-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-400 to-orange-400 p-0.5">
           <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
             <User size={32} className="text-gray-400" />
           </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Guest User</h2>
          <p className="text-gray-500 text-sm">Sign in to save your plans</p>
        </div>
      </div>
      <div className="flex gap-3">
         <button className="flex-1 bg-rose-500 text-white font-medium py-2 rounded-lg text-sm shadow-sm shadow-rose-200">Log In</button>
         <button className="flex-1 bg-white border border-gray-200 text-gray-700 font-medium py-2 rounded-lg text-sm">Sign Up</button>
      </div>
    </div>

    <div className="p-4 space-y-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-50 font-semibold text-gray-800 text-sm uppercase tracking-wide">My Planning</div>
        <button className="w-full text-left px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-50">
           <div className="flex items-center gap-3">
             <Heart size={18} className="text-rose-500" />
             <span className="text-gray-700 font-medium">Shortlisted Vendors</span>
           </div>
           <ArrowRight size={16} className="text-gray-300" />
        </button>
        <button className="w-full text-left px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
           <div className="flex items-center gap-3">
             <FileText size={18} className="text-blue-500" />
             <span className="text-gray-700 font-medium">My Budget Plans</span>
           </div>
           <ArrowRight size={16} className="text-gray-300" />
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-50 font-semibold text-gray-800 text-sm uppercase tracking-wide">Settings</div>
        <button className="w-full text-left px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-50">
           <div className="flex items-center gap-3">
             <Settings size={18} className="text-gray-500" />
             <span className="text-gray-700 font-medium">App Settings</span>
           </div>
           <ArrowRight size={16} className="text-gray-300" />
        </button>
        <button className="w-full text-left px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
           <div className="flex items-center gap-3">
             <LogOut size={18} className="text-gray-500" />
             <span className="text-gray-700 font-medium">Log Out</span>
           </div>
        </button>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-xs text-gray-400">WedNest v1.0.0</p>
      </div>
    </div>
  </div>
);

