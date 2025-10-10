"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Rocket, Sparkles } from 'lucide-react';

export const AgencyIntro = () => (
  <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden gradient-bg">
    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="container-center">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">About Us</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-heading leading-tight">
            Architects of <span className="gradient-text">Digital Growth</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Webboin is a results-driven digital marketing agency dedicated to transforming businesses through innovative strategies. We combine creativity, data analytics, and cutting-edge technology to deliver measurable success.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="flex items-center gap-3 group cursor-default">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Award className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Award Winning</p>
                <p className="text-sm text-muted-foreground font-medium">Industry Leaders</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="border-2 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 group animate-scale-in bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-950/20" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 space-y-3 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">To empower businesses with innovative digital marketing solutions that drive sustainable growth and create lasting impact in the digital landscape.</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 group animate-scale-in bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-950/20" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 space-y-3 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors"></div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Rocket className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">To be the most trusted digital marketing partner globally, recognized for strategic excellence, innovation, and unwavering commitment to client success.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);