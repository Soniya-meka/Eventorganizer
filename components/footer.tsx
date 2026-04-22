"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Phone, MapPin, Heart } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/bng__events?igsh=ZGc5czhteWdnOHh3", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@bngeventmanagement?si=veFVdermylEhm6zh", label: "YouTube" },
];

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Wedding Decoration",
  "Birthday Planning",
  "Corporate Events",
  "Venue Booking",
  "Photography",
  "Entertainment",
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#D4AF37]/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[200px]" />

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <motion.a
                href="#hero"
                className="inline-block mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-serif text-3xl font-bold gold-text">BNG</span>
              </motion.a>
              <p className="text-foreground/50 text-sm leading-relaxed mb-6">
                Creating unforgettable celebrations with premium planning and exquisite decorations in Vijayawada.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/50 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-foreground/50 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <a 
                    href="https://www.google.com/maps/place/BNG+Event's/@16.5019776,80.6749158,17z/data=!3m1!4b1!4m6!3m5!1s0x3a35fbc2f79cd5d5:0x45926dbf688c0c5b!8m2!3d16.5019776!4d80.6749158!16s%2Fg%2F11z54py3hf?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    2nd Rd, Sanath Nagar, Vijayawada, Andhra Pradesh 520007
                  </a>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <a href="tel:+919182779142" className="text-foreground/50 hover:text-[#D4AF37] text-sm transition-colors">
                    +91 9182779142
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-foreground/40 text-sm">
                Copyright 2026 MINDWHILE IT SOLUTIONS PRIVATE LIMITED -ALL Rights Reserved
              </p>
              <p className="text-foreground/40 text-sm">
                Premium Event Planning Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
