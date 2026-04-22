"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "2nd Rd, Sanath Nagar, Vijayawada, Andhra Pradesh 520007",
    link: "https://www.google.com/maps/place/BNG+Event's/@16.5019776,80.6749158,17z/data=!3m1!4b1!4m6!3m5!1s0x3a35fbc2f79cd5d5:0x45926dbf688c0c5b!8m2!3d16.5019776!4d80.6749158!16s%2Fg%2F11z54py3hf?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9182779142",
    link: "tel:+919182779142",
  },
  {
    icon: Mail,
    title: "Email",
    content: "bngeventmanagement@gmail.com",
    link: "mailto:bngeventmanagement@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sun: 9:00 AM - 9:00 PM",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hello BNG Event Planners!%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AEvent Type: ${formData.eventType}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919182779142?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/3 rounded-full blur-[120px]" />
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
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-foreground">Contact</span>{" "}
            <span className="gold-text">Us</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Ready to make your celebration extraordinary? Reach out to us and let&apos;s start planning your dream event
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex gap-4 group hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-foreground/60 hover:text-[#D4AF37] transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-foreground/60 text-sm">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919182779142"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>

            {/* Map Card */}
            <motion.a
              href="https://www.google.com/maps/place/BNG+Event's/@16.5019776,80.6749158,17z/data=!3m1!4b1!4m6!3m5!1s0x3a35fbc2f79cd5d5:0x45926dbf688c0c5b!8m2!3d16.5019776!4d80.6749158!16s%2Fg%2F11z54py3hf?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card rounded-2xl overflow-hidden h-[200px] relative block group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center transition-colors group-hover:from-[#222] group-hover:to-[#111]">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-[#D4AF37]/40 mx-auto mb-2 group-hover:text-[#D4AF37] transition-colors duration-300" />
                  <p className="text-foreground/40 text-sm group-hover:text-foreground/70 transition-colors">Vijayawada, Andhra Pradesh</p>
                  <p className="text-[#D4AF37] text-xs font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View on Google Maps →</p>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground placeholder:text-foreground/30 focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground placeholder:text-foreground/30 focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-foreground/60 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground placeholder:text-foreground/30 focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-foreground/60 mb-2">Event Type</label>
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                >
                  <option value="">Select Event Type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday Party</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Reception">Reception</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-foreground/60 mb-2">Your Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#141414] border border-[#D4AF37]/20 rounded-xl text-foreground placeholder:text-foreground/30 focus:border-[#D4AF37]/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0a0a0a] font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
