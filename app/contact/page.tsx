"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS_DETAILS } from "@/lib/constants";

export default function ContactPage() {
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
            Contact <span className="text-secondary">Air Pros</span>
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Need service? Have a question? Our team is ready to help you restore 
            comfort to your home or business.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info & Map */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Call Us</h3>
                      <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`} className="text-slate-600 hover:text-secondary transition-colors">
                        {BUSINESS_DETAILS.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email Us</h3>
                      <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-slate-600 hover:text-secondary transition-colors">
                        {BUSINESS_DETAILS.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Visit Us</h3>
                      <p className="text-slate-600">{BUSINESS_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Business Hours</h3>
                      <p className="text-slate-600">Mon - Fri: 8am - 5pm</p>
                      <p className="text-secondary font-bold">24/7 Emergency Service</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-slate-100 rounded-[2.5rem] border border-slate-200 overflow-hidden relative flex items-center justify-center text-center p-8">
                <div className="flex flex-col items-center gap-4">
                  <MapPin className="h-12 w-12 text-slate-300" />
                  <p className="text-slate-400 font-medium">Google Maps Embed Placeholder</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_DETAILS.address)}`} target="_blank" rel="noopener noreferrer">
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
              </div>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="rounded-xl border-slate-200 h-12 focus:ring-secondary focus:border-secondary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <Input placeholder="(765) 000-0000" className="rounded-xl border-slate-200 h-12" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="rounded-xl border-slate-200 h-12" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Service Needed</label>
                  <select className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>AC Repair</option>
                    <option>AC Installation</option>
                    <option>Furnace Repair</option>
                    <option>Furnace Installation</option>
                    <option>Maintenance Tune-up</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                  <Textarea placeholder="How can we help you today?" className="rounded-xl border-slate-200 min-h-[150px]" />
                </div>
                
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-xl py-8 font-bold text-lg shadow-xl shadow-secondary/20 group">
                  Send Message
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
                
                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
