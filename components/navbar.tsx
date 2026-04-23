"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#D4AF37]/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-white flex items-center justify-center group-hover:border-[#D4AF37]/60 transition-all duration-300">
              <img 
                src="https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/bng_ycsf0l" 
                alt="BNG" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.style.background = '#0a0a0a';
                }}
              />
            </div>

           </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-[#D4AF37] transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="tel:+919182779142"
              className="flex items-center gap-2 text-sm text-[#D4AF37]"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+91 9182779142</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0a0a0a] font-semibold text-sm rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[#D4AF37]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

    </motion.nav>
    
    {/* Mobile Menu - Moved outside motion.nav to avoid transform context issues */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 z-[60] bg-[#0a0a0a]"
        >
          {/* Mobile Menu Header */}
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 border-b border-[#D4AF37]/20">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/30 bg-white flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dg5ct7fys/image/upload/f_auto,q_auto/bng_ycsf0l" 
                alt="BNG" 
                className="w-full h-full object-contain"
              />
            </div>
            <button
              className="p-2 text-[#D4AF37]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="h-[calc(100vh-80px)] overflow-y-auto px-6 py-10 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-8 w-full mt-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-serif text-foreground/90 hover:text-[#D4AF37] transition-colors py-2 tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="w-full max-w-xs flex flex-col gap-4 mb-10">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="tel:+919182779142"
                className="flex items-center justify-center gap-3 py-4 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                +91 9182779142
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="#contact"
                className="py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0a0a0a] font-bold text-center rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </motion.a>
              <div className="mt-6 text-center text-foreground/30 text-xs">
                © 2026 BNG Event Planners
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
