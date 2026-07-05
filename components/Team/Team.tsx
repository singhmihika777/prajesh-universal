"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const directors = [
  {
    image: "/images/Bod1.jpeg",
    name: "Mr. Rajesh Jha",
    role: "Chairman & Managing Director",
    description:
      "With years of experience in management and higher education consulting, he has guided thousands of students and organizations toward sustainable growth. His leadership focuses on integrity, innovation and long-term relationships.",
  },
  {
    image: "/images/Bod2.jpeg",
    name: "Ms. Jaishu",
    role: "Executive Director",
    description:
      "She leads strategic planning, education consulting and client success initiatives. Her vision has helped Prajesh Universal become a trusted consulting partner for students, institutions and businesses.",
  },
];

export default function Team() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-title", {
        y: 70,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".director-card", {
        y: 80,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".director-card",
          start: "top 80%",
        },
      });

      gsap.utils.toArray(".director-image").forEach((img: any) => {
        gsap.to(img, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="team"
      className="bg-[#0b0b0b] text-white py-32"
    >
      <div className="container-custom">

        <p className="section-subtitle text-center">
          OUR LEADERSHIP
        </p>

        <h2 className="team-title section-title text-center mb-24">
          Meet The Board
          <br />
          Of Directors
        </h2>

        {directors.map((director, index) => (
          <div
            key={director.name}
            className={`director-card grid lg:grid-cols-2 gap-20 items-center mb-32 ${
              index % 2 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}

            <div className={index % 2 ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-[30px]">

                <Image
                  src={director.image}
                  alt={director.name}
                  width={700}
                  height={850}
                  className="director-image w-full h-[650px] object-cover transition duration-700 hover:scale-105"
                />

              </div>
            </div>

            {/* Content */}

            <div className={index % 2 ? "lg:order-1" : ""}>

              <p className="uppercase tracking-[5px] text-[var(--accent)] mb-4">
                {director.role}
              </p>

              <h3 className="font-heading text-5xl mb-8">
                {director.name}
              </h3>

              <p className="text-gray-300 leading-8 mb-10">
                {director.description}
              </p>

              <div className="w-24 h-[2px] bg-[var(--accent)] mb-8"></div>

              <a
                href="/contact"
                className="primary-btn"
              >
                Contact
              </a>

            </div>

          </div>
        ))}

        {/* Bottom Quote */}

        <div className="max-w-4xl mx-auto text-center mt-40">

          <p className="section-subtitle">
            OUR VISION
          </p>

          <h2 className="font-heading text-5xl leading-tight mt-8">
            "Leadership is not about titles,
            <br />
            it's about creating impact
            and empowering people."
          </h2>

        </div>

      </div>
    </section>
  );
}