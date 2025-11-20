"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ITStrategyAdvisoryPage() {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#001F54] text-white py-28 overflow-hidden">
        <Image
          src="/chess-1-edited.jpg"
          alt="IT Strategy and Advisory"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-4"
          >
            IT Strategy & Advisory Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg max-w-2xl mx-auto"
          >
            Empowering organizations with forward-thinking technology
            strategies, digital transformation roadmaps, and advisory expertise
            tailored for long-term business growth.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] mb-6">
              Transforming Technology into Business Value
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At TREBO Consulting Pvt Ltd, we help organizations leverage
              technology in a way that aligns with operational goals, drives
              innovation, and unlocks competitive advantage. Our IT Strategy &
              Advisory solutions focus on building a scalable, secure, and
              future-ready technology roadmap that supports long-term business
              objectives.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Whether you're undergoing digital transformation, modernizing IT
              operations, or aligning business and IT priorities — our experts
              deliver strategic insights rooted in industry best practices and
              years of cross-sectoral experience.
            </p>
          </div>
          <div>
            <Image
              src="/digital-transformation-technology-strategy-internet-things-transformation-ideas-adoption-technology-business-digital-age-enhancing-global-business-capabilities-ai_265022-20179.avif"
              alt="Strategy Planning"
              width={600}
              height={450}
              className="rounded-xl shadow-lg object-cover shadow-[#001F54] "
            />
          </div>
        </motion.div>

        {/* Key Offerings */}
        <div>
          <h3 className="text-3xl font-bold text-[#001F54] text-center mb-10">
            Our Key IT Advisory Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation Strategy",
                desc: "Crafting digital roadmaps that modernize business operations and unlock innovation.",
              },
              {
                title: "IT Operating Model & Governance",
                desc: "Designing governance structures, policies, and frameworks for IT compliance and efficiency.",
              },
              {
                title: "Technology Architecture Design",
                desc: "Developing scalable enterprise architectures aligned with your business objectives.",
              },
              {
                title: "Cloud Migration Advisory",
                desc: "Analyze readiness, create migration plans, and manage cloud adoption effectively.",
              },
              {
                title: "IT Risk Management",
                desc: "Identifying technological risks and establishing robust mitigation strategies.",
              },
              {
                title: "IT Budgeting & Cost Optimization",
                desc: "Ensuring optimal technology investments and maximizing ROI.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold text-[#001F54] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white p-12 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-[#001F54] mb-6">
            Why Choose TREBO Consulting?
          </h3>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
            <li>✔ Business-aligned and industry-specific advisory solutions</li>
            <li>✔ Strong focus on digital transformation and innovation</li>
            <li>✔ Deep expertise in SAP, Cloud, and Modern IT frameworks</li>
            <li>✔ Agile approach with measurable outcomes and ROI focus</li>
            <li>✔ Experienced consultants with global project delivery</li>
            <li>
              ✔ Holistic IT governance and enterprise architecture planning
            </li>
          </ul>
        </div>

        {/* Strategic Approach */}
        <div>
          <h3 className="text-3xl font-bold text-[#001F54] text-center mb-10">
            Our Advisory Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "Analyze current IT landscape, capabilities, and business alignment.",
              },
              {
                step: "02",
                title: "Strategy Design",
                desc: "Develop digital roadmaps aligned with strategic goals.",
              },
              {
                step: "03",
                title: "Implementation Advisory",
                desc: "Guide execution of projects with best practices and governance.",
              },
              {
                step: "04",
                title: "Monitoring & Optimization",
                desc: "Track performance, optimize, and evolve the IT strategy.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition"
              >
                <div className="text-5xl font-extrabold text-[#001F54] mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-16">
          <h3 className="text-3xl font-bold text-[#001F54] mb-4">
            Ready to Transform Your IT Vision into Reality?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Let’s help you build a future-ready technology strategy that
            accelerates business growth, improves efficiency, and unlocks
            innovation.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[#001F54] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#0A2540] transition"
          >
            Talk to Our Advisory Experts
          </a>
        </div>
      </div>
    </section>
  );
}
