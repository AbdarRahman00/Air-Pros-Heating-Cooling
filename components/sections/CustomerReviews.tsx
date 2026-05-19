"use client";

import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const REVIEWS = [
  {
    name: "Michael R.",
    location: "Marion, IN",
    text: "Air Pros saved us when our furnace went out in the middle of a cold snap. They were here within 2 hours and fixed the issue for a very reasonable price. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah T.",
    location: "Gas City, IN",
    text: "Had a new AC unit installed. The team was professional, clean, and took the time to explain the new thermostat. Great local company!",
    rating: 5,
  },
  {
    name: "David L.",
    location: "Fairmount, IN",
    text: "Very honest technicians. Another company told me I needed a full replacement, but Air Pros found it was just a small part. Saved me thousands!",
    rating: 5,
  },
  {
    name: "Jessica P.",
    location: "Marion, IN",
    text: "Quick response time and friendly service. They are now my go-to for all heating and cooling needs.",
    rating: 5,
  },
];

export function CustomerReviews() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
        <Quote className="h-96 w-96 text-slate-900" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
            Real Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Your Neighbors Are Saying
          </h2>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9/5 Average Rating</span>
          </div>
          <p className="text-slate-500 text-sm italic">Based on 150+ verified Google reviews</p>
        </div>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {REVIEWS.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-6"
                  >
                    <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                      <Quote className="h-6 w-6" />
                    </div>
                    
                    <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed italic">
                      "{review.text}"
                    </p>

                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{review.name}</h4>
                      <p className="text-slate-500 text-sm">{review.location}</p>
                    </div>

                    <div className="flex text-orange-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 bg-white shadow-lg border-slate-200" />
            <CarouselNext className="hidden md:flex -right-6 bg-white shadow-lg border-slate-200" />
          </Carousel>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-slate-600 font-medium">Ready to experience the same great service?</p>
          <div className="flex gap-4">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 font-bold"
            >
              <a href="https://search.google.com/local/reviews?placeid=ChIJ-x-x-x-x-x-x" target="_blank" rel="noopener noreferrer">
                Read All Reviews
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 font-bold"
            >
              <a href="https://search.google.com/local/writereview?placeid=ChIJ-x-x-x-x-x-x" target="_blank" rel="noopener noreferrer">
                Leave a Review
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
