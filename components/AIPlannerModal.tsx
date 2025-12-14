'use client';

import React, { useState } from 'react';
import { X, Bot, Loader2, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateBudgetPlan } from '../services/geminiService';
import { BudgetPlan, GeminiStatus } from '../types';

interface AIPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIPlannerModal: React.FC<AIPlannerModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
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
      setStep(2);
    } catch (error) {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStep(1);
    setStatus('idle');
    setPlan(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-rose-900/60 backdrop-blur-sm" 
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-rose-100" />
              <h2 className="font-serif text-2xl font-bold">WedNest AI Planner</h2>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose} 
              className="hover:bg-rose-700/50 p-1 rounded-full transition"
            >
              <X size={24} />
            </motion.button>
          </div>

          <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
            {step === 1 ? (
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan your budget instantly</h3>
                  <p className="text-gray-600">Tell us your details, and our AI will create a realistic allocation for your city.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">City</label>
                    <input 
                      type="text" 
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Warangal, Nizamabad"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Guest Count</label>
                    <input 
                      type="number" 
                      required
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      placeholder="e.g. 250"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Total Budget (₹)</label>
                  <input 
                    type="number" 
                    required
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. 500000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Failed to generate plan. Please verify your API key or try again.</p>
                )}

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-200 transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" /> Analyzing market rates...
                    </>
                  ) : (
                    <>
                      Generate My Plan <Bot size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              // Step 2: Results
              <div className="space-y-6">
                <div className="text-center border-b border-gray-100 pb-4">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Estimated Budget for {city}</p>
                  <h3 className="text-3xl font-serif font-bold text-rose-600 mt-1">₹{plan?.totalBudget}</h3>
                  <p className="text-gray-600 mt-2 italic">"{plan?.summary}"</p>
                </div>

                <div className="space-y-4">
                  {plan?.allocation.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-rose-50/50 p-4 rounded-lg border border-rose-100"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-800">{item.category}</span>
                        <span className="font-bold text-rose-600">{item.amount}</span>
                      </div>
                      <div className="flex items-start gap-2 mt-2">
                        <Lightbulb size={14} className="text-rose-400 mt-0.5 shrink-0" />
                        <p className="text-xs text-gray-600">{item.tips}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleReset}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-600 bg-white transition"
                  >
                    Start Over
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 shadow-md transition"
                  >
                    Find Vendors
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};