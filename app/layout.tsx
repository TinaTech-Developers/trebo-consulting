import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "TREBO Consulting Pvt Ltd | SAP Solutions, IT Strategy & Digital Transformation",
  description:
    "TREBO Consulting Pvt Ltd is a leading SAP and IT consulting company providing Digital Transformation, IT Advisory, Cybersecurity, Cloud Solutions, and SAP Implementation services across Africa, the UK, and Europe.",
  keywords: [
    "TREBO Consulting",
    "SAP Implementation",
    "Digital Transformation",
    "IT Consulting",
    "IT Strategy",
    "IT Advisory",
    "Cybersecurity",
    "SAP S/4HANA",
    "Cloud Solutions",
    "Africa IT Consulting",
    "IT Governance",
    "SAP Partner",
  ],
  authors: [{ name: "TREBO Consulting Pvt Ltd", url: "https://trebo.co" }],
  openGraph: {
    title: "TREBO Consulting Pvt Ltd | SAP & IT Consulting",
    description:
      "Trusted SAP and IT Consulting Partner delivering scalable digital solutions for enterprise growth across Africa, the UK, and Europe.",
    url: "https://trebo.co",
    siteName: "TREBO Consulting Pvt Ltd",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526378722501-4bda9b02087a",
        width: 1200,
        height: 630,
        alt: "Digital Transformation Services by TREBO Consulting",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TREBO Consulting Pvt Ltd | SAP & IT Advisory",
    description:
      "Digital transformation, SAP implementation, IT strategy, cybersecurity, and advisory services.",
    images: ["https://images.unsplash.com/photo-1526378722501-4bda9b02087a"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
