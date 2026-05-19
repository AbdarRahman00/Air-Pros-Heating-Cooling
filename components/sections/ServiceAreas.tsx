"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { motion } from "framer-motion";

export function ServiceAreas() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform translate-x-1/2 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 px-4 py-1.5 rounded-full mb-6">
              <Navigation className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Locally Operated</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Providing Comfort Across <span className="text-secondary">Marion & Beyond</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xl">
              We're proud to be a staple in the Marion community, providing fast HVAC 
              dispatch to Grant County and surrounding areas. Wherever you are, 
              expert help is just a phone call away.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
              {BUSINESS_DETAILS.serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="h-2 w-2 rounded-full bg-secondary transition-transform group-hover:scale-150" />
                  <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                    {area}
                  </span >
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Placeholder for Map UI */}
            <div className="aspect-square md:aspect-video lg:aspect-square bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-800 opacity-50 flex items-center justify-center p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-20 w-20 bg-secondary/20 rounded-full flex items-center justify-center text-secondary border border-secondary/30 animate-pulse">
                    <MapPin className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold">Serving Grant County</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Reliable HVAC service within a 30-mile radius of Marion, IN.
                  </p>
                </div>
              </div>
              
              {/* Service List Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Main Office</span>
                  <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">Open Now</span>
                </div>
                <p className="text-sm font-bold mb-1">{BUSINESS_DETAILS.address}</p>
                <p className="text-xs text-slate-400 mb-4">{BUSINESS_DETAILS.location}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_DETAILS.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary text-sm font-bold flex items-center gap-2 hover:underline"
                >
                  Get Directions <Navigation className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
