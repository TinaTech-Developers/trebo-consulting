import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Partners from "./components/partners";
import ClientsSlider from "./components/clients";
import CTASection from "./components/ctasection";

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
