"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  FaServer,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaProjectDiagram,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "SAP Implementation & Support",
      description:
        "SAP S/4HANA, Finance, BCM, Treasury, MM, SRM – Implementation, Integration & Support",
      icon: <FaServer size={36} />,
    },
    {
      title: "IT Advisory & Technology Strategy",
      description:
        "CIO Advisory, IT Governance, Enterprise Architecture, Business Process Re-engineering",
      icon: <FaChartLine size={36} />,
    },
    {
      title: "Digital Transformation & Automation",
      description: "Big Data, Analytics, RPA, AI, Smart Process Enablement",
      icon: <FaCogs size={36} />,
    },
    {
      title: "IT Audit, Risk & Compliance",
      description:
        "Internal Audits, SAP Controls, Risk Assessment, Quality Assurance Reviews",
      icon: <FaShieldAlt size={36} />,
    },
    {
      title: "Project Management & Quality Assurance",
      description:
        "PMO Setup, Agile/PRINCE2 Management, Project Recovery, Process Automation",
      icon: <FaProjectDiagram size={36} />,
    },
  ];

  return (
    <section className="bg-white px-6 md:px-16 lg:px-24 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#001F54] mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At TREBO Consulting, we deliver integrated, scalable, and sustainable
          technology solutions to transform businesses, optimize performance,
          and unlock value across Africa, the UK, and Europe.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="group relative bg-gradient-to-br from-[#001F54]/10 to-[#001F54]/5 rounded-xl shadow-lg p-8 cursor-pointer overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-[#001F54] text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#001F54] mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600">{service.description}</p>

            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F54]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-[#001F54] hover:bg-[#001A45] text-white px-8 py-4 font-medium rounded-lg shadow-md text-lg"
        >
          Contact Us for a Consultation
        </motion.a>
      </div>
    </section>
  );
}
