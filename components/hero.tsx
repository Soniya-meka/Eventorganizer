"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

function Particle({ delay, duration, startX, startY }: { delay: number; duration: number; startX: number; startY: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[#D4AF37]"
      initial={{ 
        x: startX, 
        y: startY,
        opacity: 0,
        scale: 0
      }}
      animate={{ 
        y: [startY, startY - 500],
        x: [startX, startX + Math.random() * 100 - 50],
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0]
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        boxShadow: "0 0 10px #D4AF37, 0 0 20px #D4AF37"
      }}
    />
  );
}

function ParticlesBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; duration: number; startX: number; startY: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      startY: (typeof window !== 'undefined' ? window.innerHeight : 800) + Math.random() * 200,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
    </div>
  );
}

export function Hero() {
  const images = [
    "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20260302_225735_rbghr5",
    "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260127-WA0092_roenl9",
    "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20251126_043628_iutcfo",
    "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260306-WA0020_ostpe3",
    "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260223-WA0054_q1ncsm"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-32">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt="Event Background" 
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.5, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#D4AF37]/5 to-[#0a0a0a] z-1" />
        <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-color z-1" />
      </div>
      
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[150px] z-[2]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] z-[2]" />
      
      {/* Particles */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <ParticlesBackground />
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-[1]"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >



          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            <span className="text-foreground">Make Every</span>
            <br />
            <span className="gold-text">Celebration Grand</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 font-light"
          >
            Transform your special moments into unforgettable memories with luxury event planning and exquisite decorations
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0a0a0a] font-semibold text-lg rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Book Your Event</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
