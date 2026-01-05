"use client";
import React from "react";
import { motion } from "framer-motion";
function Timeline() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-[#001F54] mb-10">Our Journey</h2>

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
              <h3 className="text-2xl font-bold text-[#001F54]">{item.year}</h3>
              <p className="text-gray-600 mt-2">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
