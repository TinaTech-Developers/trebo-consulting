"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#001F54] text-white py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative Blob */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Transform Your Business Today
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl mb-10"
        >
          Partner with TREBO Consulting Pvt Ltd to deliver integrated, scalable,
          and sustainable technology solutions that drive growth and optimize
          performance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#services"
            className="bg-yellow-400 text-[#001F54] px-8 py-4 rounded-lg font-medium hover:bg-yellow-500 transition"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="border border-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[#001F54] transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
