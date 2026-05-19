"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  DollarSign, 
  Zap, 
  ShieldCheck, 
  Award, 
  Heart 
} from "lucide-react";

const BENEFITS = [
  {
    title: "Experienced Technicians",
    description: "Highly trained and certified experts who get the job done right the first time.",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Honest Upfront Pricing",
    description: "No hidden fees or surprises. We provide clear, transparent quotes before we start.",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Fast Local Response",
    description: "Located right here in Marion, we can reach you quickly when you need us most.",
    icon: Zap,
    color: "bg-orange-500",
  },
  {
    title: "Emergency Availability",
    description: "HVAC issues don't follow a schedule. That's why we're available 24/7 for emergencies.",
    icon: ShieldCheck,
    color: "bg-red-500",
  },
  {
    title: "Financing Options",
    description: "Flexible payment plans and easy approvals to fit your budget and needs.",
    icon: Award,
    color: "bg-purple-500",
  },
  {
    title: "Satisfaction Guarantee",
    description: "We're not happy until you are. We stand behind every job with our local promise.",
    icon: Heart,
    color: "bg-pink-500",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
              The Air Pro Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Marion Homeowners Trust Air Pros Heating & Cooling
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We've built our reputation on a simple foundation: treating our neighbors 
              with respect and providing workmanship that lasts. When you choose us, 
              you're choosing local reliability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="font-bold text-slate-800">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <Award className="h-5 w-5" />
                </div>
                <span className="font-bold text-slate-800">Local Authority</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-12 w-12 ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-${benefit.color.split('-')[1]}-500/20`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
