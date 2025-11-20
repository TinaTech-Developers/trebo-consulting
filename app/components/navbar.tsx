"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="bg-white border-b-4 border-[#F7A81B] text-[#0A2540] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="TREBO Logo" className="h-12" />
          <span className="font-bold text-xl tracking-wide">
            TREBO CONSULTING
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-[#F7A81B] transition">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-[#F7A81B] transition">
            About Us
          </Link>

          {/* Dropdown Services */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span className="hover:text-[#F7A81B] transition">Services ▾</span>
            {showServices && (
              <div className="absolute top-8 left-0 bg-white text-[#0A2540] p-4  shadow-xl w-64 border border-gray-200 space-y-2">
                <Link
                  href="/sap-implementation"
                  className="block px-3 py-2 hover:bg-[#F7A81B] hover:text-white rounded-md"
                >
                  SAP Implementation
                </Link>
                <Link
                  href="/it-advisory"
                  className="block px-3 py-2 hover:bg-[#F7A81B] hover:text-white rounded-md"
                >
                  IT Strategy & Advisory
                </Link>
                <Link
                  href="/it-audit"
                  className="block px-3 py-2 hover:bg-[#F7A81B] hover:text-white rounded-md"
                >
                  IT Audit & Risk
                </Link>
                <Link
                  href="/digital-transformation"
                  className="block px-3 py-2 hover:bg-[#F7A81B] hover:text-white rounded-md"
                >
                  Digital Transformation
                </Link>
              </div>
            )}
          </div>

          <Link href="/clients" className="hover:text-[#F7A81B] transition">
            Our Clients
          </Link>
          <Link href="/partners" className="hover:text-[#F7A81B] transition">
            Our Partners
          </Link>
          <Link href="/contact" className="hover:text-[#F7A81B] transition">
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/consultation"
          className="hidden md:block bg-[#F7A81B] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#0A2540] hover:text-white transition"
        >
          Schedule Consultation
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-[#0A2540]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-[#0A2540] shadow-md">
          <Link href="/" className="block" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            href="/about"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/clients"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Our Clients
          </Link>
          <Link
            href="/partners"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Our Partners
          </Link>

          <details>
            <summary className="cursor-pointer">Services</summary>
            <div className="ml-4 mt-2 space-y-2">
              <Link href="/sap-implementation" className="block">
                SAP Implementation
              </Link>
              <Link href="/it-advisory" className="block">
                IT Strategy & Advisory
              </Link>
              <Link href="/it-audit" className="block">
                IT Audit & Risk
              </Link>
              <Link href="/digital-transformation" className="block">
                Digital Transformation
              </Link>
            </div>
          </details>

          <Link
            href="/consultation"
            onClick={() => setIsOpen(false)}
            className="block bg-[#F7A81B] text-white font-semibold px-5 py-2 rounded-md text-center mt-4 hover:bg-[#0A2540] transition"
          >
            Schedule Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
