'use client';

import React, { useState } from 'react';
import { MapPin, IndianRupee, User, Bot, Wand2, Loader2, Plus, Wallet, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateBudgetPlan } from '../services/geminiService';
import { BudgetPlan, GeminiStatus } from '../types';

export const AIPlannerView = () => {
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('');
  const [guests, setGuests] = useState('');
  const [status, setStatus] = useState<GeminiStatus>('idle');
  const [plan, setPlan] = useState<BudgetPlan | null>(null);
  
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const result = await generateBudgetPlan(city, budget, guests);
      setPlan(result);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setPlan(null);
    setCity('');
    setBudget('');
    setGuests('');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F9F8F6] relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-[80px]" />
      </div>

      {status === 'idle' || status === 'loading' ? (
        <div className="w-full max-w-4xl relative z-10">
           {/* Floating Widgets */}
           <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" }, opacity: { duration: 1 } }}
              className="absolute -left-12 bottom-20 hidden lg:flex items-center gap-3 bg-white/60 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-white/50"
           >
              <div className="bg-green-100 p-2 rounded-full"><Check size={16} className="text-green-600" /></div>
              <div className="text-sm">
                <p className="font-bold text-gray-800">Venue Found</p>
                <p className="text-xs text-gray-500">Warangal Fort</p>
              </div>
           </motion.div>

           <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, 10, 0], opacity: 1 }}
              transition={{ y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }, opacity: { duration: 1, delay: 0.5 } }}
              className="absolute -right-8 top-10 hidden lg:flex items-center gap-3 bg-white/60 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-white/50"
           >
              <div className="bg-blue-100 p-2 rounded-full"><Wallet size={16} className="text-blue-600" /></div>
              <div className="text-sm">
                <p className="font-bold text-gray-800">Budget Optimized</p>
                <p className="text-xs text-gray-500">Saved ₹45,000</p>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center mb-10"
           >
             <h2 className="text-5xl md:text-6xl font-sans font-extrabold text-gray-900 mb-4 tracking-tighter">Plan your dream wedding</h2>
             <p className="text-gray-500 text-lg md:text-xl font-light max-w-lg mx-auto">Instant budget breakdowns tailored for Indian Tier-2 cities.</p>
           </motion.div>

           {/* Glassmorphic Card */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.1 }}
             className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-[2rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] mx-auto max-w-2xl"
           >
             <form onSubmit={handleGenerate} className="space-y-5">
               <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Destination City</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-500 transition-colors" size={20} />
                      <input 
                        required 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Warangal, Nizamabad" 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50/80 hover:bg-white focus:bg-white rounded-2xl outline-none text-gray-800 font-medium placeholder:text-gray-400 border border-transparent focus:border-rose-200 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Guest List</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-500 transition-colors" size={20} />
                        <input 
                          required 
                          type="number"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          placeholder="e.g. 500" 
                          className="w-full pl-12 pr-4 py-4 bg-gray-50/80 hover:bg-white focus:bg-white rounded-2xl outline-none text-gray-800 font-medium placeholder:text-gray-400 border border-transparent focus:border-rose-200 transition-all shadow-inner"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Total Budget</label>
                      <div className="relative group">
                        <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-500 transition-colors" size={20} />
                        <input 
                          required 
                          type="number"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          placeholder="e.g. 1000000" 
                          className="w-full pl-12 pr-4 py-4 bg-gray-50/80 hover:bg-white focus:bg-white rounded-2xl outline-none text-gray-800 font-medium placeholder:text-gray-400 border border-transparent focus:border-rose-200 transition-all shadow-inner"
                        />
                      </div>
                    </div>
                  </div>
               </div>
               
               <div className="pt-2">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  type="submit"
                  className={`w-full py-4 rounded-2xl font-bold text-lg text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                    status === 'loading' 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 shadow-rose-200'
                  }`}
                >
                  {status === 'loading' ? <Loader2 className="animate-spin" /> : <Wand2 className="fill-white/20" />}
                  {status === 'loading' ? 'Generating Plan...' : 'Generate Plan'}
                </motion.button>
               </div>
             </form>
           </motion.div>
        </div>
      ) : (
        <div className="w-full max-w-3xl px-4 py-8 relative z-10">
           <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 md:p-10 shadow-xl">
             <div className="mb-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                  <Bot size={24} className="text-rose-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">
                    Your Wedding Plan for {city}
                  </h3>
                  <p className="text-gray-500">Based on {guests} guests & ₹{parseInt(budget).toLocaleString()} budget</p>
                </div>
             </div>

             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="space-y-8"
             >
                 {status === 'error' ? (
                   <div className="text-red-500 bg-red-50 p-6 rounded-2xl text-center">
                     <p className="font-medium">Something went wrong.</p>
                     <button onClick={handleReset} className="mt-2 text-rose-600 underline">Try Again</button>
                   </div>
                 ) : (
                   <>
                     <div className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100">
                       <p className="text-gray-700 leading-relaxed text-lg italic font-serif">"{plan?.summary}"</p>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {plan?.allocation.map((item, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
                          >
                             <div className="flex justify-between items-start mb-3">
                               <span className="font-bold text-gray-800 text-lg">{item.category}</span>
                               <span className="font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full text-sm">{item.amount}</span>
                             </div>
                             <p className="text-sm text-gray-500 flex gap-2">
                               <span className="shrink-0 text-rose-400">💡</span> {item.tips}
                             </p>
                          </motion.div>
                        ))}
                     </div>

                     <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100">
                        <button onClick={handleReset} className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium bg-white border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50">
                           <Plus size={18} /> New Plan
                        </button>
                        <div className="flex-1"></div>
                        <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-black transition shadow-lg">
                          Save & Find Vendors
                        </button>
                     </div>
                   </>
                 )}
             </motion.div>
           </div>
        </div>
      )}
    </div>
  );
};

