"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Grand Temple Stage", category: "Traditional", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20260302_225735_rbghr5" },
  { id: 2, title: "Green Floral Mandap", category: "Modern", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260127-WA0092_roenl9" },
  { id: 3, title: "Royal Gold Decor", category: "Luxury", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20251126_043628_iutcfo" },
  { id: 4, title: "Grand Celebration Hall", category: "Venue", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260306-WA0020_ostpe3" },
  { id: 5, title: "Elite Floral Setup", category: "Premium", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260223-WA0054_q1ncsm" },
  { id: 6, title: "Luxury Reception", category: "Wedding", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG20260403183705_zxdilw" },
];

export function Gallery() {
  const [focusId, setFocusId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItems = galleryItems;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeItems.length) % activeItems.length);
  };

  useEffect(() => {
    if (focusId !== null) {
      const idx = activeItems.findIndex(item => item.id === focusId);
      if (idx !== -1) setCurrentIndex(idx);
    }
  }, [focusId]);

  return (
    <section id="gallery" className="relative min-h-screen py-24 bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#D4AF3715,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-400/5 backdrop-blur-md mb-4"
        >
          <span className="text-xs font-bold tracking-[4px] uppercase text-blue-300">Immersive Experience</span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-serif font-bold gold-text mb-4 tracking-tighter">Event Gallery</h2>
        <p className="text-foreground/40 max-w-xl mx-auto font-light italic">Zero-gravity holographic showcase of our finest masterpieces</p>
      </div>

      {/* 3D Gallery Wall / AntiGravity Stage */}
      <div className="relative w-full h-[600px] perspective-2000 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {focusId === null ? (
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8"
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layoutId={`card-${item.id}`}
                  onClick={() => setFocusId(item.id)}
                  className="relative group cursor-pointer"
                  whileHover={{ 
                    y: -10, 
                    rotateY: idx % 2 === 0 ? 5 : -5,
                    scale: 1.05 
                  }}
                  style={{
                    perspective: "1000px"
                  }}
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 4 + idx,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-[250px] object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">{item.category}</span>
                        <h4 className="text-white font-serif text-lg">{item.title}</h4>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Blurred Background Items */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {activeItems.map((item, idx) => (
                  <motion.img
                    key={`bg-${item.id}`}
                    src={item.image}
                    className="absolute w-64 h-64 object-cover rounded-full blur-[80px]"
                    style={{
                      left: `${(idx * 25) % 100}%`,
                      top: `${(idx * 30) % 100}%`,
                    }}
                    animate={{
                      y: [0, 50, 0],
                      x: [0, 30, 0],
                      rotate: [0, 45, 0]
                    }}
                    transition={{
                      duration: 10 + idx,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>

              {/* Main Focused Item */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-0 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    layoutId={`card-${activeItems[currentIndex].id}`}
                    className="relative w-full md:max-w-7xl h-full md:max-h-[80vh] md:rounded-3xl overflow-hidden border-y md:border border-white/10 shadow-[0_0_150px_rgba(0,0,0,0.8)] bg-black/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img 
                      src={activeItems[currentIndex].image} 
                      alt={activeItems[currentIndex].title}
                      className="w-full h-full object-contain md:object-cover"
                    />
                    
                    {/* Hologram Lines Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_4px)]" />
                  </motion.div>
                </AnimatePresence>

                {/* Back Button */}
                <motion.button
                  onClick={() => setFocusId(null)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-black/50 hover:bg-[#D4AF37] text-white border border-white/10 transition-colors z-[110]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </motion.button>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 md:px-20 z-[110] pointer-events-none">
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="p-3 md:p-5 rounded-full bg-black/40 md:bg-white/10 hover:bg-[#D4AF37] text-white border border-white/20 backdrop-blur-xl transition-all pointer-events-auto"
                    whileHover={{ x: -10, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-6 h-6 md:w-12 md:h-12" />
                  </motion.button>
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="p-3 md:p-5 rounded-full bg-black/40 md:bg-white/10 hover:bg-[#D4AF37] text-white border border-white/20 backdrop-blur-xl transition-all pointer-events-auto"
                    whileHover={{ x: 10, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-6 h-6 md:w-12 md:h-12" />
                  </motion.button>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-12 flex gap-3 z-[60]">
                {activeItems.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentIndex === idx ? "w-12 bg-[#D4AF37]" : "w-6 bg-white/20"
                    }`}
                    style={{
                      boxShadow: currentIndex === idx ? "0 0 15px #D4AF37" : "none"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ambient Neon Glows */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
    </section>
  );
}
