"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const highlights = [
    {
      number: "10+",
      title: "Years of Expertise",
      description:
        "Delivering SAP & IT solutions across multiple industries globally.",
    },
    {
      number: "50+",
      title: "Successful Projects",
      description:
        "Projects implemented across Africa, Europe, and the UK with measurable impact.",
    },
    {
      number: "20+",
      title: "Global Clients",
      description:
        "Trusted by leading organizations for scalable and sustainable IT solutions.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-32 overflow-hidden">
      {/* Background shapes */}
      {/* <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-r from-[#001F54] to-transparent -skew-y-6 origin-top-left"></div> */}
      <div className="absolute bottom-0 right-0 w-full h-64 bg-linear-to-l from-[#001F54] to-transparent skew-y-6 origin-bottom-right"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#001F54] mb-4 leading-tight">
            Who <span className="text-blue-600">We Are</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            TREBO Consulting Pvt Ltd is a premier IT & SAP consultancy dedicated
            to helping businesses across Africa, the UK, and Europe achieve
            their digital transformation goals. Our integrated and scalable
            solutions drive business growth, optimize performance, and deliver
            measurable results.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl text-center border-l-4 border-blue-600 hover:shadow-2xl transition"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold text-[#001F54] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-blue-600"
          >
            <h3 className="text-2xl font-semibold text-[#001F54] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Empower organizations to thrive in the digital era by delivering
              innovative, scalable, and transformational IT solutions that drive
              performance, efficiency, and growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-blue-600"
          >
            <h3 className="text-2xl font-semibold text-[#001F54] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as a global leader in SAP & IT consulting,
              delivering reliable, cutting-edge solutions that transform
              businesses and unlock long-term value.
            </p>
          </motion.div>
        </div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Image
            src="/cr=w_600,h_300.webp"
            width={800}
            height={450}
            alt="TREBO Consulting Team"
            className="rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
