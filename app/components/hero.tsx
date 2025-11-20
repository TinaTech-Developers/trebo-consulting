"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Corporate-Governance-1.jpg" // Replace with your corporate hero image
        alt="Corporate Solutions Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6 md:px-16 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          TREBO Consulting Pvt Ltd
          <br />
          Your Global SAP & IT Solutions Partner
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl font-light"
        >
          We deliver integrated, scalable, and sustainable technology solutions
          to transform businesses, optimize performance, and unlock value across
          Africa, the UK, and Europe.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#services"
            className="bg-[#001F54] hover:bg-[#001A45] text-white px-6 py-3 font-medium rounded-lg shadow-md"
          >
            Our Services
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border border-white hover:bg-white hover:text-black px-6 py-3 font-medium rounded-lg"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Circle Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1.3 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 right-20 w-72 h-72 bg-[#001F54] rounded-full blur-3xl"
      />
    </section>
  );
}
