"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Image from "next/image";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
        <Image
          src="/contact us fb og.jpg"
          alt="Contact TREBO Consulting"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact TREBO Consulting
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Get in touch with us for SAP & IT solutions, advisory services, or
            to discuss your digital transformation goals.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <FiMapPin className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-[#001F54] mb-1">
                    Office
                  </h4>
                  <p className="text-gray-600">
                    UK - 78 Fairburn Avenue, Crewe, CW27SY <br />
                    RSA - 3 Amdern North Road, Midstream, 3600, Clayville, Jhb,
                    South Africa
                    <br />
                    Zimbabwe: F26, Warlock Crescent, Nighingale Manors,
                    Arlington Estate, Hatefield, Harare
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiPhone className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-[#001F54] mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-600">
                    +44 7717655622 (UK) <br />
                    +27 61 708 7622 (RSA) <br />
                    +263 777 028 259 (Zimbabwe)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiMail className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-[#001F54] mb-1">
                    Email
                  </h4>
                  <p className="text-gray-600"> obert@treboresources.com</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
            >
              {submitted && (
                <p className="text-green-600 font-semibold">
                  Thank you! Your message has been sent.
                </p>
              )}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#001F54] hover:bg-[#0A2540] text-white font-medium px-6 py-3 rounded-lg w-full transition"
              >
                Send Message
              </button>
            </motion.form>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 w-full h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              title="TREBO Consulting Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7263075516945!2d18.811091215253247!3d-29.85846608218201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a6426a1d4e39%3A0x3d152f0a1827b7eb!2sTREBO%20Consulting!5e0!3m2!1sen!2sza!4v1699999999999!5m2!1sen!2sza"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
