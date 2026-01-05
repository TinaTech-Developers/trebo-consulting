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

// Activate modules
SwiperCore.use([Autoplay, Pagination]);

export default function OurClientsPage() {
  const clients = [
    {
      name: "Governance Management Consulting Pty Ltd (South Africa)",
      logo: "/governance-management-consulting-logo.webp",
    },
    {
      name: "AdaptIt",
      logo: "https://www.adaptit.com/hs-fs/hubfs/Images/Adapt%20IT%20Logo.png?width=120&height=33&name=Adapt%20IT%20Logo.png",
    },
    {
      name: "jda",
      logo: "https://www.jda.org.za/wp-content/uploads/2018/10/jda.org_.za-Notice-and-Invitation-to-Register-on-the-Database-of-the-Johannesburg-Development-Agency.jpg",
    },
    {
      name: "ten",
      logo: "https://ten.sentech.co.za/wp-content/uploads/2020/07/Sentech-logo-e1709490002242.png",
    },
    {
      name: "Neom",
      logo: "https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1",
    },
    {
      name: "alayan",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQE7L4p3cZK5YQ/company-logo_200_200/company-logo_200_200/0/1630604487649/olayan_food_division_logo?e=2147483647&v=beta&t=I247DLCFvnlH3tcLFbaN0tFtJ7onCDo2VIhPq8QnOVA",
    },
    {
      name: "ADB",
      logo: "https://www.fanamc.com/english/wp-content/uploads/2025/09/243166826_224868249670855_6989382063564673441_n.jpg",
    },
    {
      name: "World Bank",
      logo: "https://www.worldbank.org/content/dam/wbr/share-logo/social-share.jpg",
    },
    {
      name: "Ministry of Finance and  Investment Promotion Zimbabwe  ",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/e6/Logo_of_the_Ministry_of_Finance_and_Investment_Promotion_of_Zimbabwe.png",
    },
    {
      name: "",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQH51sL_dpFlpQ/company-logo_200_200/company-logo_200_200/0/1630530575375/ferndale_foods_limited_logo?e=2147483647&v=beta&t=-A_uVtZmRBqa8VsW0M3397zzTXSwHHC6mFqN17lQT1M",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/pic-our-clients.jpg"
          alt="Our Clients"
          fill
          className="object-cover "
          priority
          quality={100}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

        {/* Floating shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1.2 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 left-20 w-40 h-40 bg-[#001F54] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1.5 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 right-24 w-60 h-60 bg-[#0A2540] rounded-full blur-3xl"
        />

        <div className="relative z-10 text-center px-6 md:px-12 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h1>
          <p className="text-lg md:text-xl mb-6">
            We partner with leading organizations across Africa, the UK, and
            Europe to deliver scalable, sustainable, and innovative technology
            solutions that drive measurable business impact.
          </p>
          <a
            href="/clients"
            className="bg-[#001F54] hover:bg-[#0A2540] text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Explore Our Clients
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            At TREBO Consulting, our clients are at the heart of everything we
            do. We deliver tailored SAP and IT solutions that transform business
            operations, enhance efficiency, and enable growth. Our success is
            measured by the success of our clients.
          </p>
        </div>
      </section>

      {/* Clients Slider */}
      <section id="clients" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex justify-center items-center p-6 bg-gradient-to-tr from-blue-50 to-white rounded-xl shadow-lg transition-transform"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
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
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Let TREBO Consulting partner with you to deliver innovative SAP and IT
          solutions that drive results.
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 text-[#001F54] px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}
