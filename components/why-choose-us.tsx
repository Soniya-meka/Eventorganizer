"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Handshake, Clock, Sparkles, Star, Zap } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Affordable Luxury Events",
    description: "Experience premium event planning without breaking the bank. Luxury within reach.",
  },
  {
    icon: Handshake,
    title: "Small Price, Surprising Events",
    description: "We believe every celebration deserves to be grand, regardless of budget constraints.",
  },
  {
    icon: Star,
    title: "Experienced Team",
    description: "Our skilled professionals bring years of expertise to every event we plan.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick communication and efficient planning to meet your tight schedules.",
  },
  {
    icon: Sparkles,
    title: "Best Decorations",
    description: "Stunning, Instagram-worthy setups that leave lasting impressions on your guests.",
  },
  {
    icon: Zap,
    title: "Unique Concepts",
    description: "Custom-designed themes and innovative ideas to make your event truly one-of-a-kind.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-choose-us" className="relative py-12 sm:py-16 bg-[#0a0a0a]/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/3 rounded-full blur-[200px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm text-[#D4AF37] font-medium uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-foreground">The BNG</span>{" "}
            <span className="gold-text">Difference</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Discover what sets us apart and why hundreds of clients trust us with their most precious celebrations
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl border border-[#D4AF37]/10 bg-gradient-to-br from-[#141414] to-[#0a0a0a] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-[#D4AF37]/50 via-[#F4D03F]/30 to-[#D4AF37]/50 animate-border-glow" />
                  <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-[#141414] to-[#0a0a0a]" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                    <reason.icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
