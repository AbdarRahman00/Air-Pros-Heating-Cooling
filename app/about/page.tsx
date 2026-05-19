"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Heart } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-secondary">Story</span>
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Providing reliable HVAC services to Marion, Indiana families for years. 
            Local, honest, and committed to your comfort.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square sm:aspect-video lg:aspect-square bg-slate-100 rounded-[3rem] overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-slate-300 italic p-12 text-center">
                <p>Premium lifestyle image of the Air Pros team or a happy family in a comfortable home.</p>
              </div>
              <div className="absolute bottom-8 left-8 bg-secondary text-white p-6 rounded-2xl shadow-2xl">
                <p className="text-3xl font-bold leading-none">100%</p>
                <p className="text-sm font-medium uppercase tracking-widest">Local Commitment</p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Marion's Trusted Name in Home Comfort
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Air Pros Heating & Cooling was founded on a simple principle: providing 
                our community with the kind of service we'd want for our own families. 
                In an industry where honesty can be hard to find, we chose to lead with 
                transparency and integrity.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Today, we're proud to be the first call for homeowners across Marion, 
                Gas City, and Grant County. Our technicians aren't just experts; 
                they're your neighbors.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Licensed & Insured",
                  "Background Checked",
                  "Trained Experts",
                  "Locally Owned",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">The Values That Guide Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We don't settle for 'good enough'. We aim for perfection in every repair and installation.",
                icon: Award,
              },
              {
                title: "Community",
                desc: "We are proud members of the Marion community and believe in giving back to our neighbors.",
                icon: Heart,
              },
              {
                title: "Integrity",
                desc: "Honest advice, fair pricing, and transparency are at the heart of everything we do.",
                icon: ShieldCheck,
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 flex flex-col items-center"
              >
                <div className="h-16 w-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">
              Ready to work with the <br className="hidden md:block" />
              best HVAC team in Marion?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <a 
                href={`tel:${BUSINESS_DETAILS.phoneRaw}`}
                className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-full transition-all"
              >
                Call {BUSINESS_DETAILS.phone}
              </a>
              <a 
                href="/contact"
                className="bg-white text-primary hover:bg-slate-100 font-bold py-4 px-8 rounded-full transition-all"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
