"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Megaphone, Search, Users, TrendingUp, Sparkles } from 'lucide-react';

const services = [
  { 
    icon: <Search className="h-6 w-6" />, 
    title: "SEO Optimization", 
    description: "Dominate search rankings and drive organic traffic with data-backed SEO strategies.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop"
  },
  { 
    icon: <Megaphone className="h-6 w-6" />, 
    title: "Paid Advertising", 
    description: "ROI-focused PPC campaigns across Google Ads, Meta, and LinkedIn platforms.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
  },
  { 
    icon: <Users className="h-6 w-6" />, 
    title: "Social Media Marketing", 
    description: "Build engaged communities and amplify your brand across all social channels.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
  },
  { 
    icon: <TrendingUp className="h-6 w-6" />, 
    title: "Branding & Strategy", 
    description: "Craft compelling brand identities that resonate and drive customer loyalty.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
  },
];

const ServiceSkeleton = () => (
  <Card>
    <CardHeader className="items-center">
      <Skeleton className="h-16 w-16 rounded-full" />
      <Skeleton className="h-6 w-3/4 mt-4" />
    </CardHeader>
    <CardContent className="text-center space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </CardContent>
  </Card>
);

export const ServicesSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Our Services</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-heading">What We Do Best</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
            Comprehensive digital marketing solutions tailored to accelerate your business growth.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => <ServiceSkeleton key={index} />)
          ) : (
            services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 hover:border-purple-500 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-scale-in bg-background"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
                
                <CardHeader className="items-center relative pb-4 z-10">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">{service.icon}</div>
                  <CardTitle className="mt-4 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground relative text-sm leading-relaxed z-10">
                  {service.description}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};