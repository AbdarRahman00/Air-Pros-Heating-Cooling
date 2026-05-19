import React from "react";
import Link from "next/link";
import { CreditCard, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinancingSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl shadow-primary/20">
          {/* Decorative Circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col gap-6">
              <div className="bg-secondary/20 text-secondary border border-secondary/30 px-4 py-1.5 rounded-full w-fit flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">Smart Financing</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Upgrade Now, <span className="text-secondary">Pay Later</span>
              </h2>
              
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Don't let budget constraints keep you from comfort. We offer flexible 
                monthly payment plans with competitive rates and fast approvals.
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  "Low monthly payments",
                  "Fast & easy application",
                  "No hidden fees",
                  "Flexible terms for every budget",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-7 text-lg font-bold"
                >
                  <Link href="/financing">Learn About Financing</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary rounded-full px-8 py-7 text-lg font-bold transition-all"
                >
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] w-full max-w-md">
                <div className="flex flex-col gap-8">
                  <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Instant Pre-Approval</h3>
                    <p className="text-slate-400 text-sm">
                      Check your eligibility in minutes without affecting your credit score.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-white/10 rounded-full">
                      <div className="h-full w-3/4 bg-secondary rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                      <span>Application</span>
                      <span className="text-secondary">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MaintenanceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Priority Scheduling", desc: "Jump to the front of the line." },
                { title: "Seasonal Tune-ups", desc: "Two multi-point inspections per year." },
                { title: "Discounted Repairs", desc: "Save up to 15% on all parts and labor." },
                { title: "No Dispatch Fees", desc: "Never pay for us to show up." },
              ].map((benefit) => (
                <div key={benefit.title} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-secondary/30 transition-colors">
                  <CheckCircle2 className="h-8 w-8 text-secondary mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">
              Peace of Mind
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Maintenance Membership: <br />
              <span className="text-secondary">Protect Your Investment</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Regular maintenance is the key to extending the life of your HVAC system. 
              Our membership plan takes the guesswork out of system care while 
              saving you money on every service.
            </p>
            <div className="mt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 font-bold text-lg group shadow-xl shadow-primary/10"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Join the Membership <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
