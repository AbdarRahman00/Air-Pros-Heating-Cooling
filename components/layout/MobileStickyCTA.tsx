"use client";

import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_DETAILS } from "@/lib/constants";
import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <div className="flex gap-3">
        <Button
          asChild
          className="flex-1 bg-secondary hover:bg-secondary/90 text-white rounded-xl py-6 font-bold"
        >
          <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`}>
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
        </Button>
        <Button
          variant="outline"
          asChild
          className="flex-1 border-primary text-primary hover:bg-primary/5 rounded-xl py-6 font-bold"
        >
          <Link href="/contact">
            <Calendar className="mr-2 h-5 w-5" />
            Book Online
          </Link>
        </Button>
      </div>
    </div>
  );
}
