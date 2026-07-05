"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl.from(".hero-tag", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      })

        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 80,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=.2"
        )

        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 40,
            duration: 1,
          },
          "-=.5"
        )

        .from(
          ".hero-button",
          {
            opacity: 0,
            y: 30,
            duration: .8,
          },
          "-=.5"
        );

      gsap.to(".hero-video", {
        scale: 1.12,
        duration: 18,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero relative h-screen overflow-hidden"
    >
      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}

      <div className="relative z-10 flex h-full items-center">

        <div className="container-custom">

          <div className="max-w-3xl">

           {/* <p className="hero-tag uppercase tracking-[6px] text-[var(--accent)] mb-6">
              MANAGEMENT & CONSULTING
            </p>*/}

            <h1 className="hero-title font-heading text-6xl md:text-8xl leading-[1.05] mb-8">
              Empowering
              <br />
              Students,
              <br />
              Businesses &
              <br />
              Institutions.
            </h1>

            <p className="hero-description text-lg text-gray-300 max-w-xl leading-8">
              Prajesh Universal helps students,
              professionals and organizations make
              smarter decisions through education,
              management and strategic consulting.
            </p>

            <div className="mt-12 flex gap-6">

              <a
                href="#services"
                className="primary-btn hero-button"
              >
                Explore Services
              </a>

             

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">

        <div className="flex flex-col items-center gap-4">

          <span className="uppercase tracking-[4px] text-xs">
            

          </span>

          <div className="h-14 w-[1px] bg-white animate-pulse"></div>

        </div>

      </div>

    </section>
  );
}