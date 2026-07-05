"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Contact() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left", {
        x: -80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section.current,
          start: "top 75%",
        },
      });

      gsap.from(".contact-right", {
        x: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section.current,
          start: "top 75%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/contact.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}

          <div className="contact-left">

            <p className="section-subtitle">
              CONTACT
            </p>

            <h2 className="section-title mb-8">
              Let's Build
              <br />
              Your Future.
            </h2>

            <p className="max-w-md mb-12">
              Whether you're planning your education,
              growing your business or looking for
              expert consulting, we'd love to hear
              from you.
            </p>

            <div className="space-y-10">

              <div>

                <p className="text-xs tracking-[5px] uppercase text-[var(--accent)] mb-2">
                  Phone
                </p>

                <h3 className="text-2xl font-heading">
                  +91 XXXXX XXXXX
                </h3>

              </div>

              <div>

                <p className="text-xs tracking-[5px] uppercase text-[var(--accent)] mb-2">
                  Email
                </p>

                <h3 className="text-2xl font-heading">
                  contact@prajeshuniversal.com
                </h3>

              </div>

              <div>

                <p className="text-xs tracking-[5px] uppercase text-[var(--accent)] mb-2">
                  Office
                </p>

                <h3 className="text-2xl font-heading">
                  Gurugram, Haryana
                </h3>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="contact-right">

            <form className="space-y-8">

              <div>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-lg"
                />

              </div>

              <div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-lg"
                />

              </div>

              <div>

                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none resize-none text-lg"
                />

              </div>

              <button
                className="primary-btn"
                type="submit"
              >
                Start Conversation
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}