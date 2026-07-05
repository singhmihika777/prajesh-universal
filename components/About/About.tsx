"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-title", {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-image", {
        x: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.to(".about-image img", {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#0b0b0b] py-32 overflow-hidden"
    >
      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}

        <div>

          <p className="about-subtitle section-subtitle">
            ABOUT US
          </p>

          <h2 className="about-title section-title">
            Helping People
            <br />
            Make Better
            <br />
            Decisions.
          </h2>

          <p className="about-text max-text mb-8">
            Prajesh Universal is a Management & Consulting
            company dedicated to providing reliable
            guidance for students, professionals and
            organizations.

            <br />
            <br />

            From Higher Education Admissions and Career
            Counseling to Business Consulting and Strategic
            Advisory, we believe every successful journey
            begins with the right guidance.

            <br />
            <br />

            Our approach combines experience, transparency,
            innovation and personalized consulting to help
            our clients achieve their long-term goals.
          </p>

          <a
            href="#services"
            className="primary-btn"
          >
            Explore Services
          </a>

        </div>

        {/* RIGHT IMAGE */}

        <div className="about-image">

          <div className="image-wrap rounded-[28px] overflow-hidden">

            <Image
              src="/images/about.jpg"
              alt="About prajesh Universal"
              width={900}
              height={1100}
              priority
              className="w-full h-[720px] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}