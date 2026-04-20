"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Lightbulb, Camera, Music, PartyPopper, Building } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Wedding Flowers Decoration",
    description: "Exquisite floral arrangements that transform your venue into a breathtaking paradise of elegance and romance.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Setup",
    description: "Professional lighting design that creates the perfect ambiance for your special moments.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capture every precious moment with our expert photography and videography services.",
  },
  {
    icon: Music,
    title: "DJ Sound",
    description: "Premium sound systems and professional DJs to keep your guests entertained all night.",
  },
  {
    icon: PartyPopper,
    title: "Entertainment",
    description: "Curated entertainment options from live performances to interactive activities.",
  },
  {
    icon: Building,
    title: "Venue Booking",
    description: "Access to exclusive venues and expert assistance in selecting the perfect location.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-12 sm:py-16 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm text-[#D4AF37] font-medium uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-foreground">Premium Event</span>{" "}
            <span className="gold-text">Services</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            From concept to execution, we offer comprehensive event services to make your celebration truly extraordinary
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-card h-full p-8 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-all duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative text-foreground/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
