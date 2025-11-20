"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
} from "react-icons/fi";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule a Consultation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Unlock your digital potential with expert SAP, IT Advisory, and
            Digital Transformation guidance.
          </p>
        </motion.div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#001F54] mb-4">
            Why Book a Consultation?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            At TREBO Consulting Pvt Ltd, we provide tailored strategic guidance
            to help businesses realign their operations, optimize technology
            investments, and accelerate digital growth. Whether you're
            evaluating SAP solutions, planning cloud migration, or enhancing
            cybersecurity, our expert consultants are here to assist.
          </p>
        </motion.div>

        {/* Consultation Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl mx-auto"
        >
          {submitted && (
            <p className="text-green-600 font-semibold mb-4">
              Thank you! We will get in touch with you shortly.
            </p>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <div className="flex items-center border rounded-lg px-3">
                <FiUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full py-3 outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <div className="flex items-center border rounded-lg px-3">
                <FiMail className="text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-3 outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <div className="flex items-center border rounded-lg px-3">
                <FiPhone className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full py-3 outline-none"
                  placeholder="+27 61 708 7622"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Service Interested In
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full py-3 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select a Service</option>
                <option value="SAP Implementation">SAP Implementation</option>
                <option value="IT Strategy & Advisory">
                  IT Strategy & Advisory
                </option>
                <option value="Digital Transformation">
                  Digital Transformation
                </option>
                <option value="IT Audit & Risk">
                  IT Audit & Risk Consulting
                </option>
                <option value="Cloud & Cybersecurity">
                  Cloud & Cybersecurity
                </option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <div className="flex items-start border rounded-lg px-3">
              <FiMessageSquare className="text-gray-500 mt-3 mr-2" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full py-3 outline-none"
                placeholder="Tell us more about your consultation requirements..."
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-[#001F54] hover:bg-[#0A2540] text-white py-3 rounded-lg font-medium transition"
          >
            Request Consultation
          </button>
        </motion.form>
      </div>
    </section>
  );
}
