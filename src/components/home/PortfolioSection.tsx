"use client";

import { BarChart } from 'lucide-react';

const portfolioItems = [
  { title: "E-commerce Growth for a Mumbai Retailer", category: "SEO & Content", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", results: "+250% Traffic" },
  { title: "SaaS Campaign for a Bangalore Startup", category: "Social Media", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", results: "2M+ Reach" },
  { title: "Branding for a Delhi Food Chain", category: "Branding", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop", results: "+180% Sales" },
];

export const PortfolioSection = () => (
  <section className="w-full py-16 md:py-24 lg:py-32 gradient-bg relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"></div>
    <div className="container-center">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
          <BarChart className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Case Studies</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-heading">Success Stories</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
          Real results from real clients. See how we've transformed businesses.
        </p>
      </div>
      <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {portfolioItems.map((item, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-purple-500 transition-all duration-300 bg-card hover:shadow-2xl animate-scale-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs font-bold shadow-lg backdrop-blur-sm">
                {item.results}
              </div>
              <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2 uppercase tracking-wide">{item.category}</p>
              <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);