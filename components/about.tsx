"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Calendar, Heart } from "lucide-react";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Completed" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Heart, value: "100%", label: "Client Satisfaction" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative pt-8 pb-24 sm:pt-12 sm:pb-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-sm text-[#D4AF37] font-medium uppercase tracking-widest mb-4"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl sm:text-5xl font-bold mb-6"
            >
              <span className="text-foreground">Welcome to</span>
              <br />
              <span className="gold-text">BNG Event Planners</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-foreground/60 text-lg leading-relaxed mb-6"
            >
              Thank you for choosing BNG Event Planners. We are dedicated to making your celebration even more special with premium planning and exquisite decorations that exceed expectations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-foreground/60 text-lg leading-relaxed mb-8"
            >
              From intimate gatherings to grand celebrations, we bring creativity, elegance, and meticulous attention to detail to every event we plan. Our experienced team ensures every moment is perfectly orchestrated.
            </motion.p>
            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-4 transition-all duration-300"
            >
              Explore Our Services
              <span className="text-xl">→</span>
            </motion.a>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center group hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-3xl font-bold gold-text mb-2">{stat.value}</h3>
                <p className="text-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
