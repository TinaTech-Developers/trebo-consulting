"use client";

import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-[#001F54] mb-4">
            TREBO Consulting Pvt Ltd
          </h3>
          <p className="mb-4">
            Delivering integrated, scalable, and sustainable technology
            solutions across Africa, the UK, and Europe.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FiMapPin />
              UK - 78 Fairburn Avenue, Crewe, CW27SY <br />
              RSA - 3 Amdern North Road, Midstream, 3600, Clayville, Jhb, South
              Africa
              <br />
              Zimbabwe: F26, Warlock Crescent, Nighingale Manors, Arlington
              Estate, Hatefield, Harare
            </div>
            <div className="flex items-center gap-2">
              <FiPhone /> +27 61 708 7622
            </div>
            <div className="flex items-center gap-2">
              <FiMail /> obert@treboconsult.co.za
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#001F54] mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="/clients" className="hover:text-yellow-400 transition">
                Clients
              </a>
            </li>
            <li>
              <a href="/partners" className="hover:text-yellow-400 transition">
                Partners
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-[#001F54] mb-4">
            Services
          </h4>
          <ul className="flex flex-col gap-2">
            <li>SAP Implementation & Support</li>
            <li>IT Advisory & Management</li>
            <li>Digital Transformation</li>
            <li>IT Audit & Risk</li>
            <li>Project Management</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-[#001F54] mb-4">
            Follow Us
          </h4>
          <div className="flex gap-4 text-[#001F54]">
            <a href="#" className="hover:text-yellow-400 transition">
              <FiLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FiTwitter size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FiFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm flex flex-col gap-2">
        <span>
          &copy; {new Date().getFullYear()} TREBO Consulting Pvt Ltd. All rights
          reserved.
        </span>
        <span>
          Developed by{" "}
          <a
            href="https://tinasoftnexus.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#001F54] hover:text-yellow-400 transition font-medium"
          >
            TinaSoft Nexus
          </a>
        </span>
      </div>
    </footer>
  );
}
