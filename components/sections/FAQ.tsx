"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQS = [
  {
    question: "How often should HVAC systems be serviced?",
    answer: "We recommend professional maintenance twice a year—once in the spring for your AC and once in the fall for your furnace. This ensures efficiency and helps prevent unexpected breakdowns.",
  },
  {
    question: "Do you offer emergency HVAC repair?",
    answer: "Yes! Air Pros Heating & Cooling provides 24/7 emergency service for Marion and surrounding Grant County communities. If you have a critical failure, call us immediately at (765) 668-7767.",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Marion, Gas City, Fairmount, Upland, Jonesboro, Hartford City, and all surrounding Indiana communities within a 30-mile radius.",
  },
  {
    question: "How long do HVAC systems typically last?",
    answer: "With proper maintenance, most residential HVAC systems last between 15 and 25 years. However, if your system is over 15 years old and requiring frequent repairs, it may be more cost-effective to replace it with a high-efficiency unit.",
  },
  {
    question: "How can I lower my monthly energy bills?",
    answer: "The best ways are regular maintenance tune-ups, installing a programmable or smart thermostat, and ensuring your air filters are changed every 1-3 months. We can also inspect your ductwork for leaks.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Everything you need to know about our services and HVAC care.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50"
          >
            <Accordion className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-100 last:border-none">
                  <AccordionTrigger className="text-left font-bold text-lg text-slate-800 hover:text-secondary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
