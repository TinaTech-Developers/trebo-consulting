"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ValuesClient() {
  return (
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
  );
}
