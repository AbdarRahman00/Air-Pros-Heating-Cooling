"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, Star, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_DETAILS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-hvac.png"
          alt="HVAC Technician at work"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Trust Badge */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 w-fit">
              <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
              <span className="text-white text-sm font-medium">
                {BUSINESS_DETAILS.rating} Star Rated Local Experts
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Fast & Reliable <br />
              <span className="text-secondary">Heating & Cooling</span> <br />
              Services in Marion, IN
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Experience the "Air Pro" difference. Honest pricing, same-day service, 
              and expert workmanship from your trusted local HVAC authority.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-7 text-lg font-bold shadow-xl shadow-secondary/20 group"
              >
                <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`}>
                  <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  Call {BUSINESS_DETAILS.phone}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-slate-900 rounded-full px-8 py-7 text-lg font-bold transition-all duration-300"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Service
                </Link>
              </Button>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <span className="text-white text-sm font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-blue-500" />
                </div>
                <span className="text-white text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-white text-sm font-medium">Satisfaction Guaranteed</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Trust Card (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl max-w-sm relative">
              <div className="absolute -top-6 -right-6 bg-accent text-white p-4 rounded-2xl rotate-12 shadow-xl">
                <span className="font-bold text-lg leading-none">Emergency?<br />Available 24/7</span>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4.9
                  </div>
                  <div>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-white text-sm font-medium">Google Rated</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white leading-snug">
                  "The most reliable HVAC team in Marion. Fixed our AC in record time!"
                </h3>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 relative rounded-full overflow-hidden border border-white/20">
                    <Image 
                      src="/reviewer-avatar.png" 
                      alt="John D." 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">John D.</p>
                    <p className="text-slate-400 text-xs">Marion Resident</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
