'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Star, MapPin, BadgeCheck, Phone, Mail, Calendar, Users, IndianRupee, Check, X, Clock, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_VENDORS, NIZAMABAD_REAL_VENUES } from '../lib/constants';

interface VendorDetailViewProps {
  vendorId: string;
}

export const VendorDetailView: React.FC<VendorDetailViewProps> = ({ vendorId }) => {
  const router = useRouter();
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Combine all vendors
  const allVendorsList = [...NIZAMABAD_REAL_VENUES, ...ALL_VENDORS];
  const vendor = allVendorsList.find(v => v.id === vendorId);

  if (!vendor) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vendor not found</h2>
          <button 
            onClick={() => router.push('/browse')}
            className="text-rose-600 hover:text-rose-700 font-medium"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <motion.button
            whileHover={{ x: -3 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src={vendor.imageUrl}
            alt={vendor.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-6 left-6 flex gap-3">
            {vendor.verified && (
              <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-rose-600 shadow-lg border border-white/50">
                <BadgeCheck size={14} className="fill-rose-500 text-white" />
                Verified
              </div>
            )}
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-sm font-bold shadow-lg border border-white/50">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              {vendor.rating} <span className="text-gray-600 font-normal text-xs">({vendor.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              {vendor.name}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-1.5">
                <MapPin size={18} />
                <span>{vendor.city}</span>
              </div>
              <span className="text-white/70">•</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                {vendor.category}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* About Section */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">
                  {vendor.name} is a premium {vendor.category.toLowerCase()} service provider in {vendor.city}, 
                  specializing in creating unforgettable wedding experiences. With {vendor.reviewCount} satisfied customers 
                  and a {vendor.rating}-star rating, we are committed to delivering excellence in every detail.
                </p>
              </section>

              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Professional Service',
                    'Quality Assurance',
                    'On-time Delivery',
                    'Customer Support',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check size={18} className="text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Gallery Placeholder */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                      <Image
                        src={vendor.imageUrl}
                        alt={`${vendor.name} - Image ${i}`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">₹{vendor.priceStart.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">starting from</span>
                  </div>
                  <p className="text-sm text-gray-600">Prices may vary based on requirements</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all mb-4"
                >
                  Book Now
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white border-2 border-rose-500 text-rose-600 py-4 rounded-xl font-bold text-lg hover:bg-rose-50 transition-all mb-4"
                >
                  Request Quote
                </motion.button>

                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone size={18} className="text-gray-500" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail size={18} className="text-gray-500" />
                    <span className="text-sm">contact@{vendor.name.toLowerCase().replace(/\s+/g, '')}.in</span>
                  </div>
                  {vendor.verified && (
                    <div className="flex items-center gap-2 text-sm text-green-600 pt-2">
                      <Shield size={16} />
                      <span>Verified Business</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <BookingModal
            vendor={vendor}
            onClose={() => setShowBookingModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface BookingModalProps {
  vendor: any;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ vendor, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Booking request submitted! We will contact you soon.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book {vendor.name}</h2>
            <p className="text-sm text-gray-600">{vendor.category} • {vendor.city}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Date *</label>
              <input
                type="date"
                required
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Guest Count *</label>
              <input
                type="number"
                required
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                placeholder="500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-semibold shadow-lg transition"
            >
              Submit Booking Request
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

