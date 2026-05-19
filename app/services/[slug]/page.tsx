import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Calendar, Star, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_DETAILS, SERVICES } from "@/lib/constants";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.href.includes(slug));
  
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} in Marion, IN | Air Pros Heating & Cooling`,
    description: `${service.description} Fast, reliable, and affordable HVAC service in Marion, Gas City, and Grant County. 4.9-star rated local experts.`,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.href.includes(slug));

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-orange-400 fill-orange-400" />
              <span className="text-sm font-bold uppercase tracking-widest text-slate-300">
                #1 HVAC Experts in Marion
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title} <br />
              <span className="text-secondary">in Marion, IN</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-10">
              {service.description} We provide expert diagnostics and reliable solutions 
              to keep your home comfortable year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-7 font-bold text-lg">
                <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {BUSINESS_DETAILS.phone}
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-7 font-bold text-lg">
                <a href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div className="prose prose-slate lg:prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Reliable {service.title} Services You Can Trust</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  When your {service.title.toLowerCase()} system isn't working as it should, you need more than 
                  just a quick fix—you need a reliable partner who understands the local climate and 
                  residential systems of Marion. At Air Pros Heating & Cooling, we specialize in 
                  providing high-quality {service.title.toLowerCase()} that stands the test of time.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Our licensed technicians are background-checked and continuously trained on the 
                  latest HVAC technologies. Whether you have a legacy system or a modern high-efficiency 
                  unit, we have the tools and expertise to handle it.
                </p>
              </div>

              <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Our {service.title} Process</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Expert Diagnosis", desc: "We find the root cause of the issue, not just the symptoms." },
                    { title: "Upfront Pricing", desc: "We provide clear quotes before any work begins." },
                    { title: "Precision Service", desc: "Our techs perform meticulous repairs or installations." },
                    { title: "Final Inspection", desc: "We test every system to ensure peak performance." },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-6 mt-6">
                <h3 className="text-2xl font-bold text-slate-900">Why Choose Air Pros?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Licensed & Insured Experts",
                    "No Hidden Fees",
                    "Emergency Service Available",
                    "Locally Owned & Operated",
                    "Satisfaction Guaranteed",
                    "Financing Available",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-8">
              <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                <h3 className="text-xl font-bold mb-6">Need Immediate Help?</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Our team is ready to dispatch 24/7 for emergency HVAC situations in Marion.
                </p>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-xl py-6 font-bold shadow-lg shadow-secondary/20 mb-4">
                  <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {BUSINESS_DETAILS.phone}
                  </a>
                </Button>
                <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Fast Local Dispatch
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Other Services</h3>
                <div className="flex flex-col gap-3">
                  {SERVICES.filter(s => !s.href.includes(slug)).slice(0, 5).map((s) => (
                    <a 
                      key={s.title} 
                      href={s.href}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-sm font-medium text-slate-600 group-hover:text-secondary">{s.title}</span>
                      <Star className="h-3 w-3 text-slate-200 group-hover:text-secondary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </div>
  );
}
