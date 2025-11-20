"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ITAuditRiskPage() {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#001F54] text-white py-28 overflow-hidden">
        <Image
          src="/documents-compliance-report-audit-concept-600nw-2402656563.webp"
          alt="IT Audit & Risk"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-4"
          >
            IT Audit & Risk Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg max-w-2xl mx-auto"
          >
            Protect your business with proactive IT risk assessment, compliance,
            governance frameworks, and security assurance strategies designed to
            safeguard business continuity.
          </motion.p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] mb-6">
              Strengthening IT Governance & Business Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              TREBO Consulting Pvt Ltd helps organizations identify, analyze,
              and mitigate IT risks while ensuring regulatory compliance,
              operational resilience, and secure digital transformation. We
              provide end-to-end IT audit and risk advisory services designed to
              enhance governance, protect data, and maintain systems integrity.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              In today’s complex digital landscape, threats such as
              cyber-attacks, data breaches, and compliance failures can severely
              impact business continuity. Our proven methodologies help you
              proactively secure your technology ecosystem — ensuring
              confidentiality, integrity, and availability.
            </p>
          </div>
          <div>
            <Image
              src="/Strategic-IT-Solutions-788x508.webp"
              alt="Risk Analysis Meeting"
              width={600}
              height={450}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.div>

        {/* Key Audit & Risk Services */}
        <div>
          <h3 className="text-3xl font-bold text-[#001F54] text-center mb-10">
            Our Core IT Audit & Risk Management Solutions
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "IT General Controls (ITGC) Audit",
                desc: "Audit of system access, change management, operations, and security compliance.",
              },
              {
                title: "Cybersecurity Risk Assessment",
                desc: "Evaluate threats, vulnerabilities, and recommend mitigation and control measures.",
              },
              {
                title: "Compliance & Regulatory Audit",
                desc: "Ensuring alignment with GDPR, POPIA, ISO 27001, SOX, COBIT, and industry standards.",
              },
              {
                title: "Business Continuity & Disaster Recovery",
                desc: "Developing BCP/DRP strategies to ensure zero downtime and resilience.",
              },
              {
                title: "IT Governance & Risk Advisory",
                desc: "Helping organizations develop IT governance frameworks aligned with business strategy.",
              },
              {
                title: "Cloud Risk & Security Assessment",
                desc: "Analyze cloud infrastructure risks and build secure migration strategies.",
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
            Why Businesses Trust TREBO Consulting
          </h3>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
            <li>
              ✔ Deep expertise in IT governance, risk, compliance and
              cybersecurity
            </li>
            <li>✔ Tailored methodologies aligned with global best practices</li>
            <li>
              ✔ Compliance assurance for local and international regulations
            </li>
            <li>✔ Practical, action-oriented audit recommendations</li>
            <li>✔ Technology risk mitigation for both on-prem and cloud</li>
            <li>✔ Certified auditors & cybersecurity specialists</li>
          </ul>
        </div>

        {/* Audit Process */}
        <div>
          <h3 className="text-3xl font-bold text-[#001F54] text-center mb-10">
            Our IT Audit & Risk Management Approach
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Risk Identification",
                desc: "Understand business risks across systems, people, technology, and compliance.",
              },
              {
                step: "02",
                title: "Assessment & Audit",
                desc: "Perform detailed audit to evaluate risk exposure, vulnerabilities, and gaps.",
              },
              {
                step: "03",
                title: "Mitigation Planning",
                desc: "Develop governance and remediation strategies for risk reduction.",
              },
              {
                step: "04",
                title: "Monitoring & Governance",
                desc: "Implement ongoing risk monitoring, compliance tracking, and governance.",
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
            Secure Your Business with Expert IT Audit & Risk Management
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our experts help you protect business operations, strengthen
            governance, and ensure compliance — with strategic IT risk advisory
            tailored to your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#001F54] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#0A2540] transition"
          >
            Speak to a Risk Advisory Consultant
          </a>
        </div>
      </div>
    </section>
  );
}
