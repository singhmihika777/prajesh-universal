"use client";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import useLenis from "@/hooks/useLenis";
import Services from "@/components/Services/Services";
import WhyUs from "@/components/WhyUs/WhyUs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useLenis();

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </main>
  );
}