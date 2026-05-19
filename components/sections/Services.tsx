"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Full-Service HVAC Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl text-lg"
          >
            From emergency repairs to precision installations, our team of licensed experts 
            is ready to restore your comfort with fast, honest service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Settings;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 border-none bg-white overflow-hidden flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="h-14 w-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-secondary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button
                      variant="link"
                      asChild
                      className="px-0 text-primary font-bold group-hover:text-secondary"
                    >
                      <Link href={service.href} className="flex items-center gap-1">
                        Learn More <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 font-bold text-lg"
          >
            <Link href="/contact">Get a Free Estimate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
