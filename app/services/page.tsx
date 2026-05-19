import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  ChevronRight, 
  AirVent, 
  Snowflake, 
  Flame, 
  Thermometer, 
  Wind, 
  Settings, 
  Cloud, 
  TriangleAlert 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "HVAC Services in Marion, IN | Air Pros Heating & Cooling",
  description: "Expert AC repair, furnace installation, heat pump service, and maintenance in Marion and Grant County. Fast, reliable service from local pros.",
};

const iconMap: Record<string, any> = {
  AirVent,
  Snowflake,
  Flame,
  Thermometer,
  Wind,
  Settings,
  Cloud,
  TriangleAlert,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-secondary">Services</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            From emergency repairs to precision installations, we provide 
            full-service HVAC solutions tailored to the Marion climate.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Settings;
              return (
                <div 
                  key={service.title}
                  className="group bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors shadow-sm">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Button asChild variant="link" className="px-0 text-primary group-hover:text-secondary font-bold text-lg">
                    <Link href={service.href} className="flex items-center gap-2">
                      View Details <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </div>
  );
}
