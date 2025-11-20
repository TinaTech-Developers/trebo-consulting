"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // correct import for v10+ :contentReference[oaicite:1]{index=1}

import "swiper/css";
import "swiper/css/autoplay";

const clients = [
  { name: "African Union Commission", logo: "/clients/auc.png" },
  { name: "Olayan Group", logo: "/clients/olayan.png" },
  { name: "Sentech", logo: "/clients/sentech.png" },
  { name: "Joburg Development Agency", logo: "/clients/jda.png" },
  { name: "Various SOEs & Govt Bodies", logo: "/clients/soes.png" },
  { name: "Private Sector Companies", logo: "/clients/private-sector.png" },
];

export default function ClientsSlider() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] mb-4">
          Our Clients
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We have successfully delivered projects for leading organizations
          across Africa, the UK, and Europe.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {clients.map((client, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
