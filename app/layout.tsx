import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Air Pros Heating & Cooling | HVAC Services in Marion, IN",
  description: "Fast and reliable heating & cooling services in Marion, Indiana. 4.9-star rated HVAC experts for AC repair, furnace installation, and emergency service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}


