import React from "react";
import { Star, Shield, MapPin, Clock, CreditCard } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";

const TRUST_ITEMS = [
  {
    icon: Star,
    text: "4.9 Star Rated",
    color: "text-orange-500",
  },
  {
    icon: Shield,
    text: "Locally Owned",
    color: "text-blue-500",
  },
  {
    icon: Clock,
    text: "Emergency Service",
    color: "text-red-500",
  },
  {
    icon: CreditCard,
    text: "Financing Available",
    color: "text-green-500",
  },
  {
    icon: MapPin,
    text: "Marion's Choice",
    color: "text-purple-500",
  },
];

export function TrustBar() {
  return (
    <section className="bg-white py-8 border-y border-slate-100 shadow-sm relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {TRUST_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <div className={`p-1.5 rounded-lg bg-slate-50 ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <span className="font-bold text-slate-800 text-sm whitespace-nowrap uppercase tracking-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
