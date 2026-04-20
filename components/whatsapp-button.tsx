"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Phone, Facebook, Youtube, Linkedin, Camera } from "lucide-react";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Flickr Button */}
      <motion.a
        href="https://flickr.com/photos/93769420@N03/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0063db] text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,100,219,0.4)] transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Flickr Portfolio"
      >
        <Camera className="w-6 h-6" />
      </motion.a>

      {/* LinkedIn Button */}
      <motion.a
        href="https://www.linkedin.com/company/aica-events/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0077b5] text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Follow us on LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </motion.a>

      {/* YouTube Button */}
      <motion.a
        href="https://www.youtube.com/channel/UCPY8N84G1H-TEYgdEhBoMJw"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ff0000] text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Subscribe on YouTube"
      >
        <Youtube className="w-6 h-6" />
      </motion.a>

      {/* Facebook Button */}
      <motion.a
        href="https://www.facebook.com/aicaevents/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877f2] text-white shadow-lg hover:shadow-[0_0_20px_rgba(24,119,242,0.4)] transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Follow us on Facebook"
      >
        <Facebook className="w-6 h-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919182779142"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* Instagram Button */}
      <motion.a
        href="https://www.instagram.com/aicaevents?igsh=MXB2MG12OTdybWJrYQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg hover:shadow-[0_0_20px_rgba(220,39,67,0.4)] transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-6 h-6" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919182779142?text=Hello%20BNG%20Event%20Planners!%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </motion.a>
    </div>
  );
}
