import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
// Since Facebook is missing from this version of lucide-react, we'll use a generic icon or SVG
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

import { BUSINESS_DETAILS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white rounded-lg p-1.5">
                <div className="text-primary font-bold text-xl leading-none">AP</div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">
                  AIR PROS
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-secondary uppercase leading-none">
                  HEATING & COOLING
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trusted local HVAC experts serving Marion, Indiana and surrounding communities. 
              We provide fast, reliable, and affordable heating and cooling solutions 
              for your home or business.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS_DETAILS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-secondary transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-secondary transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-secondary transition-colors">
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-secondary text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-secondary text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/financing" className="text-slate-400 hover:text-secondary text-sm transition-colors">Financing</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-secondary text-sm transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-slate-400 hover:text-secondary text-sm transition-colors">Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="text-slate-400 hover:text-secondary text-sm transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#services" className="text-secondary hover:underline text-sm font-medium">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-slate-400 text-sm">{BUSINESS_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                  {BUSINESS_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                  {BUSINESS_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-slate-500 hover:text-slate-400 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
