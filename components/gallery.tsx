"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Grand Wedding", category: "Wedding", aspect: "tall", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260127-WA0092_roenl9" },
  { id: 2, title: "Premium Decor", category: "Decor", aspect: "wide", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20251126_043628_iutcfo" },
  { id: 5, title: "Night Ambience", category: "Lighting", aspect: "wide", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20260302_225735_rbghr5" },
  { id: 3, title: "Royal Floral", category: "Wedding", aspect: "square", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG20260403183705_zxdilw" },
  { id: 4, title: "Elegant Setup", category: "Reception", aspect: "square", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20251126_044013_qznjm8" },
  { id: 6, title: "Cinematic Event", category: "Photography", aspect: "square", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG20260220173538_dwrbzi" },
  { id: 7, title: "Elite Celebration", category: "Wedding", aspect: "wide", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260223-WA0054_q1ncsm" },
  { id: 8, title: "Event Precision", category: "Decor", aspect: "square", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/Screenshot_2026-03-31-12-21-22-16_1c337646f29875672b5a61192b9010f9_wc2rbu" },
  { id: 11, title: "Royal Entry", category: "Wedding", aspect: "tall", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260306-WA0020_ostpe3" },
  { id: 9, title: "Luxury Moments", category: "Reception", aspect: "square", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/Screenshot_2026-03-31-12-21-22-16_1c337646f29875672b5a61192b9010f9_t3vsfm" },
  { id: 10, title: "Grandeur", category: "Wedding", aspect: "wide", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20241114_175944_596_d2upy2" },
  { id: 12, title: "Floral Magic", category: "Decor", aspect: "square", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20251128-WA0052_frmebb" },
  { id: 13, title: "Stage Elegance", category: "Decor", aspect: "square", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20251022-WA0017_obmr48" },
  { id: 14, title: "Classic Wedding", category: "Wedding", aspect: "wide", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20251225-WA0001_giaj2l" },
  { id: 15, title: "Dreamy Night", category: "Lighting", aspect: "square", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20251024-WA0056_unbkpb" },
  { id: 16, title: "Perfect Finish", category: "Wedding", aspect: "square", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20251026_074109_wrkrrk" },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Wedding", "Reception", "Decor", "Lighting", "Photography"];
  
  const filteredItems = activeCategory === "All" 
    ? galleryItems.slice(0, 6)
    : galleryItems.filter(item => item.category === activeCategory);

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <section id="gallery" className="relative py-12 sm:py-16 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm text-[#D4AF37] font-medium uppercase tracking-widest mb-4">
            Our Portfolio
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-foreground">Event</span>{" "}
            <span className="gold-text">Gallery</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-10">
            Browse through our stunning collection of events that showcase our dedication to excellence
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-[#D4AF37] text-[#0a0a0a] border-[#D4AF37]"
                    : "text-foreground/60 border-white/10 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  item.aspect === "tall" 
                    ? "md:row-span-2" 
                    : item.aspect === "wide" 
                    ? "md:col-span-2" 
                    : ""
                }`}
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      item.aspect === "tall" ? "h-[500px] md:h-[620px]" : "h-[240px] md:h-[300px]"
                    }`}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs text-[#D4AF37] uppercase tracking-wider mb-2 block font-bold">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-2xl text-white font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 backdrop-blur-md flex items-center justify-center border border-[#D4AF37]/30">
                        <ZoomIn className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 rounded-2xl transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-2xl p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-6xl w-full max-h-screen overflow-hidden rounded-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <div className="mt-6 text-center">
              <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-bold mb-2 block">{selectedItem.category}</span>
              <h3 className="text-3xl font-serif text-white font-bold">{selectedItem.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
