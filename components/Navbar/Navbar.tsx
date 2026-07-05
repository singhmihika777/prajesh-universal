"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

        <div className="container-custom flex items-center justify-between h-[80px]">

          <Link
            href="/"
            className="font-heading tracking-[8px] text-xl md:text-2xl"
          >
            PRAJESH UNIVERSAL
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-10">

            <Link href="/#about">About</Link>

            <Link href="/#services">Services</Link>

            <Link href="/#why-us">Why Us</Link>

            <Link href="/team">Team</Link>

            <Link href="/#contact">Contact</Link>

          </nav>

          {/* Mobile Button */}

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0b0b0b] z-[999] transition-all duration-500 ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex justify-end p-8">

          <button
            onClick={closeMenu}
          >
            <X size={34} />
          </button>

        </div>

        <nav className="flex flex-col items-center justify-center gap-10 h-[80%]">

          <Link
            href="/"
            onClick={closeMenu}
            className="text-3xl font-heading"
          >
            Home
          </Link>

          <Link
            href="/#about"
            onClick={closeMenu}
            className="text-3xl font-heading"
          >
            About
          </Link>

          <Link
            href="/#services"
            onClick={closeMenu}
            className="text-3xl font-heading"
          >
            Services
          </Link>

          <Link
            href="/team"
            onClick={closeMenu}
            className="text-3xl font-heading"
          >
            Team
          </Link>

          <Link
            href="/#why-us"
            onClick={closeMenu}
            className="text-3xl font-heading"
          >
            Why Us
          </Link>

          <Link
            href="/#contact"
            onClick={closeMenu}
            className="text-3xl font-heading"
          >
            Contact
          </Link>

        </nav>

      </div>
    </>
  );
}