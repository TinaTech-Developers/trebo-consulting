import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Partners from "./components/partners";
import ClientsSlider from "./components/clients";
import CTASection from "./components/ctasection";

/**
 * SEO Metadata
 */
export const metadata = {
  title: "TREBO Consulting | Empowering Digital Transformation",
  description:
    "TREBO Consulting Pvt Ltd delivers innovative IT & SAP solutions across Africa, the UK, and Europe. We help organizations scale, optimize performance, and achieve digital transformation with integrated, reliable, and sustainable technology solutions.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {/* <Partners /> */}
      <ClientsSlider />
      <CTASection />
    </>
  );
}
