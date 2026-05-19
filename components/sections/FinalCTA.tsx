import React from "react";
import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_DETAILS } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Need Fast HVAC Service <br />
            <span className="text-primary-foreground">in Marion?</span>
          </h2>
          
          <p className="text-white/80 text-xl md:text-2xl max-w-2xl leading-relaxed">
            Our expert technicians are standing by. Call us now or book your appointment online in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-8 text-xl font-bold shadow-2xl group"
            >
              <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`}>
                <Phone className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12" />
                Call {BUSINESS_DETAILS.phone}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-secondary border-none hover:bg-slate-100 rounded-full px-10 py-8 text-xl font-bold"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Book Appointment <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8 text-white/60 text-sm font-medium uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              24/7 Emergency Support
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Same-Day Dispatch
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Local & Family Owned
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
