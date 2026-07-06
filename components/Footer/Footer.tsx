"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white">

      <div className="container-custom py-24">

        {/* Top */}

        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-16">

          {/* Company */}

          <div>

            <h2 className="font-heading text-4xl tracking-[8px] mb-6">
              PRAJESH
              <br />
              UNIVERSAL
            </h2>

            <p className="text-gray-400 leading-8 max-w-md">
              A trusted Management & Consulting company helping
              students, professionals and organizations make
              informed decisions through expert guidance,
              strategic consulting and higher education support.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="uppercase tracking-[4px] text-[var(--accent)] mb-6">
              Navigation
            </h4>

            <div className="flex flex-col gap-4">

              <Link href="/">Home</Link>

              <Link href="/#about">About</Link>

              <Link href="/#services">Services</Link>

              <Link href="/team">Meet The Team</Link>

              <Link href="/#contact">Contact</Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h4 className="uppercase tracking-[4px] text-[var(--accent)] mb-6">
              Services
            </h4>

            <div className="space-y-4 text-gray-400">

              <p>Higher Education</p>

              <p>Business Consulting</p>

              <p>Career Guidance</p>

              <p>Management Advisory</p>

              <p>Corporate Consultancy</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="uppercase tracking-[4px] text-[var(--accent)] mb-6">
              Contact
            </h4>

            <div className="space-y-5">

              <div>
                <p className="text-gray-500 text-sm uppercase">
                  Phone
                </p>

                <p className="mt-2">
                  +91 XXXXXXXXXX
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm uppercase">
                  Email
                </p>

                <p className="mt-2">
                  contact@prajeshuniversal.com
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm uppercase">
                  Office
                </p>

                <p className="mt-2 leading-7">
                  Your Office Address,
                  <br />
                  India
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-white/10 my-16"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm tracking-wide">
            © {new Date().getFullYear()} Prajesh Universal.
            All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm text-gray-500">

            <Link href="/">
              Privacy Policy
            </Link>

            <Link href="/">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}