import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhoWeAre from "./_components/whoweare";
import ValuesClient from "./_components/valuesclient";
import Timeline from "./_components/timeline";

export const metadata = {
  title: "About TREBO Consulting | IT & SAP Solutions Across Africa & UK",
  description:
    "TREBO Consulting Pvt Ltd helps organizations innovate, scale, and lead through technology. Learn about our mission, vision, values, and journey of digital transformation across Africa, Europe, and the UK.",
};

function AboutUsPage() {
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

        <div className="relative z-10 text-white text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empowering Digital Transformation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            We help organizations innovate, scale, and lead through technology.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <WhoWeAre />

      {/* Floating Values Cards */}
      <ValuesClient />

      {/* Timeline / Journey Section */}
      <Timeline />
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

export default AboutUsPage;
