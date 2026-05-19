"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BUSINESS_DETAILS, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Financing", href: "/financing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2 border-b border-slate-200"
          : "bg-white py-4 shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary rounded-lg p-1.5 transition-transform group-hover:scale-105">
              <div className="text-white font-bold text-xl leading-none">AP</div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-primary leading-tight">
                AIR PROS
              </span>
              <span className="text-[10px] md:text-xs font-semibold tracking-widest text-secondary uppercase leading-none">
                HEATING & COOLING
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-secondary transition-colors py-4"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "rotate-180")} />}
                </Link>

                {link.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="p-3 rounded-xl hover:bg-slate-50 text-sm font-medium text-slate-600 hover:text-secondary transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-primary text-primary hover:bg-primary/5 rounded-full"
            >
              <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`}>
                <Phone className="mr-2 h-4 w-4" />
                {BUSINESS_DETAILS.phone}
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg shadow-accent/20"
            >
              <Link href="/contact">Schedule Service</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_DETAILS.phoneRaw}`}
              className="p-2 bg-secondary text-white rounded-full"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 pt-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Navigation
                    </span>
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-semibold text-slate-800 hover:text-secondary py-2 border-b border-slate-100 flex items-center justify-between"
                      >
                        {link.name}
                        <ChevronRight className="h-4 w-4 text-slate-300" />
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Our Services
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {SERVICES.slice(0, 4).map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="text-sm font-medium text-slate-600 hover:text-secondary py-1"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-4">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6"
                    >
                      <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`}>
                        <Phone className="mr-2 h-5 w-5" />
                        Call {BUSINESS_DETAILS.phone}
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full border-secondary text-secondary hover:bg-secondary/5 rounded-xl py-6"
                    >
                      <Link href="/contact">Book Appointment</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
