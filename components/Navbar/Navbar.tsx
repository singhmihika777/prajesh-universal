"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-custom flex h-[90px] items-center justify-between">

        <Link
          href="/"
          className="font-heading text-[1.4rem] tracking-[8px]"
        >
          PRAJESH UNIVERSAL
        </Link>

        <nav className="hidden gap-10 md:flex">
          {links.map((item) => (
            item.href.startsWith("/") ? (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-[4px] transition hover:text-[var(--accent)]"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-[4px] transition hover:text-[var(--accent)]"
              >
                {item.name}
              </a>
            )
          ))}
        </nav>

      </div>
    </header>
  );
}