"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = () => (
  <section className="relative w-full py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
    <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 bg-indigo-200/50 dark:bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-96 h-96 bg-purple-200/50 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="container-center text-center">
      <div className="space-y-6 animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
          <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Let&apos;s Work Together</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl font-heading leading-tight">
          Ready to <span className="gradient-text">Transform</span> Your Business?
        </h2>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground leading-relaxed">
          Let&apos;s discuss your goals and create a customized strategy to accelerate your growth. Get a free consultation today.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
        <Button size="lg" className="group shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all hover:scale-105" asChild>
            <Link href="/#contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </Button>
        <Button size="lg" variant="outline" className="border-2 hover:bg-purple-50 dark:hover:bg-purple-950 hover:border-purple-500 transition-all" asChild>
            <Link href="/">
                View Our Work
            </Link>
        </Button>
      </div>
    </div>
  </section>
);