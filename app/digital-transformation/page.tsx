"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function DigitalTransformation() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center bg-blue-500 justify-center text-white">
        <Image
          src="/1_PUgaOXdJykcpbgSatAjerQ.jpg"
          alt="Digital Transformation"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="relative text-center max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Digital Transformation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-4 text-lg md:text-2xl"
          >
            Empowering businesses with innovative technology, automation, and
            next-gen digital strategies.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-gray-700">
        <h2 className="text-3xl font-bold text-[#001F54]  text-center mb-6">
          What is Digital Transformation?
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">
          Digital Transformation is more than just adopting new technologies—it
          is about reshaping how businesses operate, innovate, and deliver value
          to customers. At <strong>TREBO Consulting Pvt Ltd</strong>, we help
          companies across Africa, the UK, and Europe modernize their
          operations, improve customer engagement, and unlock new digital
          revenue streams. We combine strategic advisory, process
          re-engineering, and cutting-edge technology to transform your business
          into a future-ready digital enterprise.
        </p>
      </section>

      {/* Key Services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#001F54]  mb-10">
            Our Core Digital Transformation Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Process Automation",
                description:
                  "Automate manual workflows using AI, RPA, and intelligent automation to increase efficiency and reduce operational costs.",
              },
              {
                title: "Cloud Migration & Optimization",
                description:
                  "Move your business to the cloud with scalable, secure, and high-performing cloud infrastructure (AWS, Azure, SAP Cloud).",
              },
              {
                title: "Data & Analytics",
                description:
                  "Unlock powerful business insights with data analytics, dashboards, and predictive modeling for better decision-making.",
              },
              {
                title: "Customer Experience (CX) Enhancement",
                description:
                  "Implement digital platforms that enhance customer engagement, personalization, and satisfaction.",
              },
              {
                title: "AI & Smart Technologies",
                description:
                  "Integrate AI chatbots, machine learning, and IoT to drive innovation and improve business intelligence.",
              },
              {
                title: "SAP-driven Digital Initiatives",
                description:
                  "Leverage SAP S/4HANA, SAP Fiori, and SAP BTP to transform your core business processes digitally and intelligently.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 border rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#001F54] ">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Digital Transformation Roadmap
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Digital Readiness Assessment",
              "Strategy & Solution Design",
              "Technology Implementation",
              "Continuous Optimization & Support",
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 bg-white rounded-lg shadow text-[#001F54] "
              >
                <span className="text-4xl font-bold text-blue-600">
                  {idx + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <div className="text-center py-16">
        <h3 className="text-3xl font-bold text-[#001F54] mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Let our experts guide you through a seamless digital transformation
          journey.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-[#001F54] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#0A2540] transition"
        >
          Talk to Our Advisory Experts
        </a>
      </div>
    </div>
  );
}
