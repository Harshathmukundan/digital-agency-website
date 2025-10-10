"use client";

import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}