import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "prajesh Universal",
    template: "%s | prajesh Universal",
  },
  description:
    "prajesh Universal provides Management & Consulting Services including Higher Education Consulting, Career Guidance, Business Consulting, Admissions Support and Strategic Advisory.",

  keywords: [
    "Management Consulting",
    "Higher Education",
    "Career Guidance",
    "Admissions",
    "Business Consulting",
    "prajesh Universal",
  ],

  authors: [
    {
      name: "prajesh Universal",
    },
  ],

  creator: "prajesh Universal",

  metadataBase: new URL("https://example.com"),

  openGraph: {
    title: "prajesh Universal",
    description:
      "Management & Consulting Services for Students, Professionals and Businesses.",
    siteName: "prajesh Universal",
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}