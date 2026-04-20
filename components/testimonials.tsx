"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Wedding Client",
    content: "BNG Event Planners made our dream wedding a reality. The decorations were absolutely stunning, and every detail was perfect. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Corporate Event",
    content: "Professional, creative, and extremely responsive. Our company event was a huge success thanks to BNG. They truly understand luxury events.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lakshmi Devi",
    role: "Birthday Party",
    content: "My daughter&apos;s birthday was transformed into a fairy tale. The team went above and beyond to create magical memories for our family.",
    rating: 5,
  },
  {
    id: 4,
    name: "Venkat Rao",
    role: "Reception",
    content: "Exceptional service at an affordable price. BNG proved that luxury doesn&apos;t have to be expensive. Our reception was the talk of the town!",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-12 sm:py-16 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm text-[#D4AF37] font-medium uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-foreground">Client</span>{" "}
            <span className="gold-text">Stories</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 sm:top-12 sm:left-12">
              <Quote className="w-12 h-12 text-[#D4AF37]/20" />
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center pt-8"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl text-foreground/80 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-serif text-xl font-semibold gold-text mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-foreground/50 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]"
                        : "bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
