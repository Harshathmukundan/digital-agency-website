"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => (
  <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden gradient-bg">
    {/* Decorative elements */}
    <div className="absolute inset-0 bg-grid-slate-700/25"></div>
    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

    <div className="container-center">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-6 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 w-fit border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Digital Marketing Excellence</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-heading leading-tight">
              Transform Your Brand with{' '}
              <span className="gradient-text">Digital Innovation</span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
              We craft data-driven marketing strategies that amplify your reach, engage your audience, and deliver measurable growth. Your success is our mission.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all hover:scale-105" asChild>
              <Link href="/#contact">
                Get in touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-purple-50 dark:hover:bg-purple-950 hover:border-purple-500 transition-all" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-6 border-t border-border/50">
            <div className="flex flex-col group cursor-default">
              <span className="text-3xl font-bold text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform inline-block">150+</span>
              <span className="text-sm text-muted-foreground font-medium">Projects Delivered</span>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="flex flex-col group cursor-default">
              <span className="text-3xl font-bold text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform inline-block">98%</span>
              <span className="text-sm text-muted-foreground font-medium">Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
              alt="Digital Marketing Illustration"
              className="relative mx-auto rounded-2xl shadow-2xl object-cover w-full aspect-[4/3] border-2 border-border group-hover:border-purple-500 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);