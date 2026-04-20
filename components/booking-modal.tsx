"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Calendar, User, Phone, Mail, FileText } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🎉 New Booking Request!%0A%0A👤 Name: ${formData.name}%0A📱 Phone: ${formData.phone}%0A📧 Email: ${formData.email}%0A📅 Date: ${formData.date}%0A🎊 Event: ${formData.eventType}%0A💬 Details: ${formData.message}`;
    window.open(`https://wa.me/919182779142?text=${message}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/90 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full max-w-lg glass-card rounded-3xl p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold gold-text mb-2">Book Your Event</h3>
              <p className="text-foreground/60 text-sm">Fill in the details and we&apos;ll get back to you shortly</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground placeholder:text-foreground/30 focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground placeholder:text-foreground/30 focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground placeholder:text-foreground/30 focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                  />
                </div>
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                >
                  <option value="">Event Type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Reception">Reception</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="relative">
                <FileText className="absolute left-4 top-4 w-5 h-5 text-[#D4AF37]/50" />
                <textarea
                  rows={3}
                  placeholder="Tell us about your event..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground placeholder:text-foreground/30 focus:border-[#D4AF37]/50 focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0a0a0a] font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Book via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
