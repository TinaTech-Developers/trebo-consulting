"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] md:h-[100vh] flex items-center bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/corporate-hero.jpg" // Replace with your hero image in /public
        alt="Corporate Solutions"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12 text-white text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Welcome to TREBO Consulting Pvt Ltd
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl mb-8 text-gray-100 max-w-2xl"
        >
          Delivering SAP and IT solutions that drive digital transformation and
          business growth across Africa, the UK, and Europe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#services"
            className="bg-[#001F54] hover:bg-[#0A2540] px-6 py-3 rounded-lg text-white font-medium transition"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Optional Decorative Shapes */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.1, opacity: 0.1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"
      />
    </section>
  );
}
