"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhoWeAre from "./_components/whoweare";

export default function AboutUsPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh] flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="About Us Background"
          fill
          priority
          className="object-cover brightness-75"
        />

        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white text-center px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empowering Digital Transformation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            We help organizations innovate, scale, and lead through technology.
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <WhoWeAre />

      {/* Floating Values Cards */}
      <section className="py-28 bg-[#F4F5F7]">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001F54]">Our Pillars</h2>
          <p className="text-gray-600 mt-3">
            The foundation that drives our vision and client success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "Innovation",
              desc: "We design modern, scalable digital solutions.",
            },
            {
              title: "Excellence",
              desc: "We deliver quality with precision and passion.",
            },
            {
              title: "Integrity",
              desc: "We build strong, trusted client relationships.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-[#001F54] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline / Journey Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-[#001F54] mb-10">
            Our Journey
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                year: "2018",
                event: "Founded with a focus on SAP integration.",
              },
              {
                year: "2019",
                event: "Expanded into IT infrastructure & consulting.",
              },
              {
                year: "2021",
                event: "International projects across Europe & UK.",
              },
              {
                year: "2024",
                event: "Launched AI-driven digital innovation solutions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 border-l-4 border-[#001F54] bg-gray-50 rounded-lg shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[#001F54]">
                  {item.year}
                </h3>
                <p className="text-gray-600 mt-2">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#001F54] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Extraordinary
        </h2>
        <p className="text-gray-300 mb-8">
          Ready to transform your business with future-ready technology
          solutions?
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-white text-[#001F54] font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
