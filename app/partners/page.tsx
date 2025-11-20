"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Activate Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export default function OurPartnersPage() {
  const partners = [
    { name: "SAP", logo: "/partners/sap.png" },
    { name: "Microsoft", logo: "/partners/microsoft.png" },
    { name: "AWS", logo: "/partners/aws.png" },
    { name: "Oracle", logo: "/partners/oracle.png" },
    { name: "VMware", logo: "/partners/vmware.png" },
    { name: "Cisco", logo: "/partners/cisco.png" },
    { name: "IBM", logo: "/partners/ibm.png" },
    { name: "Google Cloud", logo: "/partners/google-cloud.png" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/our-partners.jpg"
          alt="Our Partners"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white max-w-3xl px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Strategic Partners
          </h1>
          <p className="text-lg md:text-xl">
            TREBO Consulting collaborates with global technology leaders to
            provide innovative and reliable solutions for our clients across
            Africa, Europe, and the UK.
          </p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] mb-4">
            Why Our Partners Matter
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Our partnerships with leading technology providers ensure that we
            deliver world-class SAP and IT solutions. Through collaboration,
            knowledge sharing, and innovation, we empower businesses to succeed
            in the digital era.
          </p>
        </div>
      </section>

      {/* Partners Slider */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex justify-center items-center p-6 bg-gradient-to-tr from-blue-50 to-white rounded-xl shadow-lg transition-transform"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#001F54] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Become a TREBO Partner
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Interested in collaborating with TREBO Consulting? Join our network of
          global technology partners and deliver transformative solutions
          together.
        </p>
        <a
          href="#contact"
          className="bg-yellow-400 text-[#001F54] px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}
