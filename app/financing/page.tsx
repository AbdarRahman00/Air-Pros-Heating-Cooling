"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, CheckCircle2, TriangleAlert, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_DETAILS } from "@/lib/constants";

export default function FinancingPage() {
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
            Flexible <span className="text-secondary">Financing</span>
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Comfort shouldn't break the bank. We offer affordable monthly payment 
            plans to help you get the HVAC service you need today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Don't Put Off Your Comfort <br />
                <span className="text-secondary">Apply in Minutes</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you're facing an unexpected repair or planning a full system 
                upgrade, our financing partners offer solutions for almost any budget. 
                Get approved fast and enjoy your home's perfect climate.
              </p>
              
              <div className="flex flex-col gap-4">
                {[
                  "Low monthly payments that fit your budget",
                  "Fast and simple online application process",
                  "Instant credit decisions available",
                  "No pre-payment penalties on many plans",
                  "Special promotional offers available regularly",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 py-8 font-bold text-lg shadow-xl shadow-secondary/20">
                  Check Your Eligibility Now
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                <CreditCard className="h-16 w-16 text-secondary mb-8" />
                <h3 className="text-2xl font-bold mb-4">Why Finance?</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  HVAC systems are significant investments. Financing allows you to 
                  choose the higher-efficiency system you really want while 
                  keeping your emergency savings intact.
                </p>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                  <TriangleAlert className="h-6 w-6 text-orange-400 shrink-0" />
                  <p className="text-sm text-slate-300">
                    Many of our customers find that the monthly energy savings 
                    from a new unit help cover the financing payment!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500">Getting financed is as easy as 1-2-3.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Apply Online", desc: "Fill out a simple application on our partner's secure website." },
              { step: "02", title: "Get Approved", desc: "Receive an instant or fast decision on your credit application." },
              { step: "03", title: "Schedule Service", desc: "Once approved, we'll get started on your HVAC project immediately." },
            ].map((step, index) => (
              <div key={index} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center flex flex-col items-center">
                <span className="text-4xl font-black text-secondary/20 mb-4">{step.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-slate-900">Have questions about financing?</h2>
            <p className="text-slate-600 text-lg">
              Our team can explain the different plans and help you find the best 
              option for your situation. Give us a call today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-7 font-bold">
                <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {BUSINESS_DETAILS.phone}
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-secondary text-secondary hover:bg-secondary/5 rounded-full px-8 py-7 font-bold">
                <a href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
