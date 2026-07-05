"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 12,
    suffix: "+",
    title: "Years of Excellence",
  },
  {
    number: 5000,
    suffix: "+",
    title: "Students Guided",
  },
  {
    number: 98,
    suffix: "%",
    title: "Success Rate",
  },
  {
    number: 40,
    suffix: "+",
    title: "University Partners",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="relative py-36 overflow-hidden"
    >
      <Image
        src="/images/stats.jpg"
        alt=""
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[0.4em] text-[#d6b36a] text-center">

          Why prajesh Universal

        </p>

        <h2 className="font-heading text-6xl text-center mt-6">

          Trusted By Thousands

        </h2>

        <div className="grid md:grid-cols-4 gap-10 mt-24">

          {stats.map((item, index) => (

            <div
              key={index}
              className="text-center"
            >

              <h3 className="font-heading text-6xl text-[#d6b36a]">

                {inView && (

                  <CountUp
                    end={item.number}
                    duration={2}
                  />

                )}

                {item.suffix}

              </h3>

              <div className="w-20 h-[2px] bg-[#d6b36a] mx-auto my-5"/>

              <p className="uppercase tracking-[0.2em]">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}