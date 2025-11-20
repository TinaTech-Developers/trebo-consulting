"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // <- try this
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  { name: "SAP", logo: "/partners/sap.png" },
  { name: "Microsoft", logo: "/partners/microsoft.png" },
  { name: "Oracle", logo: "/partners/oracle.png" },
  { name: "AWS", logo: "/partners/aws.png" },
  { name: "IBM", logo: "/partners/ibm.png" },
  { name: "Google Cloud", logo: "/partners/google-cloud.png" },
];

export default function PartnerSlider() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We collaborate with industry-leading technology providers to deliver
          the best solutions for our clients.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {partners.map((partner, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
