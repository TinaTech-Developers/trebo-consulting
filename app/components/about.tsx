import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-16 px-6">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-[#001F54]">
        Leading SAP & IT Solutions for Digital Transformation
      </h1>
      <p className="max-w-7xl text-center text-lg text-gray-700">
        Welcome to TREBO Consulting Pvt Ltd! We are a leading provider of SAP
        and IT solutions, dedicated to helping businesses across Africa, the UK,
        and Europe achieve their digital transformation goals. Our team of
        experienced professionals specializes in delivering integrated,
        scalable, and sustainable technology solutions that drive business
        growth and optimize performance.
      </p>
      <Link
        href="/"
        className="mt-6 text-[#001F54] hover:bg-[#001F54] hover:text-white  py-2 px-3 md:px-5 border-2 border-[#001F54] rounded-lg"
      >
        Learn More
      </Link>
    </div>
  );
}

export default About;
