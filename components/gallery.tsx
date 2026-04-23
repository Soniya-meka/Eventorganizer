"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Grand Temple Stage", category: "Traditional", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20260302_225735_rbghr5" },
  { id: 2, title: "Green Floral Mandap", category: "Modern", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260127-WA0092_roenl9" },
  { id: 3, title: "Royal Gold Decor", category: "Luxury", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG_20251126_043628_iutcfo" },
  { id: 4, title: "Grand Celebration Hall", category: "Venue", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260306-WA0020_ostpe3" },
  { id: 5, title: "Elite Floral Setup", category: "Premium", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG-20260223-WA0054_q1ncsm" },
  { id: 6, title: "Luxury Reception", category: "Wedding", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/IMG20260403183705_zxdilw" },
  { id: 7, title: "Traditional Decor", category: "Traditional", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922054/IMG_20251026_074109_rfjpcs.jpg" },
  { id: 9, title: "Stage Decoration", category: "Stage Decor", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922054/IMG-20251107-WA0042_bh09v3.jpg" },
  { id: 10, title: "Floral Arrangement", category: "Traditional", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922054/IMG-20251112-WA0033_gxjfar.jpg" },
  { id: 11, title: "Grand Entrance", category: "Wedding", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922054/IMG-20260119-WA0251_jnveb1.jpg" },
  { id: 12, title: "Night Event Decor", category: "Premium Lighting", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922054/IMG-20260201-WA0007_efhpt0.jpg" },
  { id: 13, title: "Classic Mandap", category: "Traditional", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922053/IMG-20251117-WA0001_yotxer.jpg" },
  { id: 14, title: "Luxury Backdrop", category: "Modern", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922053/IMG-20260101-WA0077_zg0fhy.jpg" },
  { id: 15, title: "Elite Stage Decor", category: "Luxury", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922053/IMG-20251122-WA0011_e5r1ig.jpg" },
  { id: 16, title: "Wedding Celebration", category: "Wedding", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922053/IMG-20251010-WA0037_hyqucx.jpg" },
  { id: 17, title: "Royal Entry Decor", category: "Premium", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922053/IMG_20260301_141339_vyzas3.jpg" },
  { id: 18, title: "Reception Stage", category: "Modern", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922053/IMG-20260129-WA0012_igudti.jpg" },
  { id: 19, title: "Floral Pathway", category: "Traditional", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922053/IMG-20260131-WA0008_iylnne.jpg" },
  { id: 20, title: "Grand Hall Decor", category: "Venue", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922052/IMG-20251020-WA0055_kitosi.jpg" },
  { id: 21, title: "Wedding Mandap", category: "Traditional", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922052/IMG-20260324-WA0127_knqclg.jpg" },
  { id: 22, title: "Elegant Setup", category: "Modern", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922052/IMG-20260205-WA0024_bq4olg.jpg" },
  { id: 23, title: "Luxury Wedding", category: "Wedding", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922052/IMG-20251024-WA0056_bg2me8.jpg" },
  { id: 24, title: "Premium Backdrop", category: "Luxury", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922052/IMG-20260130-WA0013_hvctmg.jpg" },
  { id: 25, title: "Lighting Showcase", category: "Premium Lighting", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922051/IMG-20251225-WA0001_o7oh9m.jpg" },
  { id: 26, title: "Event Decoration", category: "Traditional", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922051/IMG-20251022-WA0017_tjvpf4.jpg" },
  { id: 27, title: "Grand Venue", category: "Venue", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922051/IMG-20251128-WA0052_tof0k5.jpg" },
  { id: 28, title: "Modern Stage", category: "Modern", image: "https://res.cloudinary.com/dg5ct7fys/image/upload/v1776922051/IMG-20260306-WA0020_hjcdcz.jpg" },
];

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Our Masterpieces
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Event <span className="gold-text">Gallery</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto rounded-full" />
        </div>

        {/* Manual Slideshow Container */}
        <div className="relative group">
          <div className="overflow-hidden rounded-2xl md:rounded-[2rem] border border-[#D4AF37]/20 shadow-2xl" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {galleryItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[700px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-16">
                    <div className="max-w-xl">
                      <span className="text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-widest mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-serif font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all duration-300 z-10 group/btn"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover/btn:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all duration-300 z-10 group/btn"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Slide Counter / Instruction */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <p className="text-foreground/40 text-sm font-light italic">
            Slide or use buttons to browse all {galleryItems.length} masterpieces
          </p>
        </div>
      </div>
    </section>
  );
}
