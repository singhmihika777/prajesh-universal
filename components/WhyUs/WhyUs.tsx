"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const stats = [
  {
    number: "10+",
    title: "Years of Experience",
  },
  {
    number: "5000+",
    title: "Students Guided",
  },
  {
    number: "200+",
    title: "Business Clients",
  },
  {
    number: "98%",
    title: "Success Rate",
  },
];

export default function WhyUs() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".why-heading", {
        opacity: 0,
        y: 80,
        duration: 1,
        scrollTrigger: {
          trigger: section.current,
          start: "top 75%",
        },
      });

      gsap.from(".stat", {
        opacity: 0,
        y: 60,
        stagger: 0.18,
        duration: 0.9,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="why-us"
      className="bg-[#0b0b0b] py-40"
    >
      <div className="container-custom">

        <p className="section-subtitle text-center">
          WHY CHOOSE US
        </p>

        <h2 className="why-heading section-title text-center mb-24">
          Trusted Guidance.
          <br />
          Proven Results.
        </h2>

        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-16">

          {stats.map((item) => (

            <div
              key={item.title}
              className="stat text-center"
            >

              <h3
                className="
                font-heading
                text-6xl
                text-[var(--accent)]
                mb-5
              "
              >
                {item.number}
              </h3>

              <div
                className="
                w-20
                h-[1px]
                bg-[var(--accent)]
                mx-auto
                mb-5
              "
              />

              <p
                className="
                uppercase
                tracking-[4px]
                text-sm
                text-gray-400
              "
              >
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}