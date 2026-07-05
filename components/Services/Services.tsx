"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const services = [
  {
    title: "Career Guidance",
    description:
      "Helping students and professionals choose the right career path through personalized mentoring.",
    image: "/images/service1.jpg",
  },
  {
    title: "Management Advisory",
    description:
      "Professional consulting solutions designed for educational institutions and businesses.",
    image: "/images/service2.jpg",
  },
  {
    title: "Business Consulting",
    description:
      "Strategic consulting for startups, SMEs and enterprises to improve operations and growth.",
    image: "/images/service3.jpg",
  },
  {
    title: "Higher Education Consulting",
    description:
      "Expert guidance for admissions, university selection, application strategy and documentation.",
    image: "/images/service4.jpg",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".service-item").forEach((item: any) => {
        gsap.from(item, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#111] py-36"
    >
      <div className="container-custom">

        <p className="section-subtitle text-center">
          OUR SERVICES
        </p>

        <h2 className="section-title text-center mb-24">
          What We Do
        </h2>

        {services.map((service, index) => (
          <div
            key={service.title}
            className={`service-item grid lg:grid-cols-2 gap-16 items-center mb-32 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="image-wrap rounded-[28px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={700}
                  className="w-full h-[500px] object-cover transition duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <h3 className="font-heading text-5xl mb-6">
                {service.title}
              </h3>

              <p className="text-lg text-gray-300 leading-8 mb-8">
                {service.description}
              </p>

              <a href="#contact" className="primary-btn">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}