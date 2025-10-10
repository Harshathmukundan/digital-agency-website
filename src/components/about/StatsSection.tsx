"use client";

import { Award, Users, Rocket } from 'lucide-react';

const stats = [
    { value: '150+', label: 'Happy Clients', icon: <Users className="h-8 w-8" /> },
    { value: '500+', label: 'Projects Completed', icon: <Award className="h-8 w-8" /> },
    { value: '8+', label: 'Years of Excellence', icon: <Rocket className="h-8 w-8" /> },
];

export const StatsSection = () => (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-white dark:bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 dark:opacity-100 opacity-0"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 dark:bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-200/30 dark:bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container-center">
            <div className="grid gap-12 sm:grid-cols-3 text-center">
                {stats.map((stat, index) => (
                    <div key={stat.label} className="flex flex-col items-center justify-center space-y-4 group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="h-20 w-20 rounded-3xl bg-purple-600 dark:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl border border-purple-700 dark:border-white/30">
                            {stat.icon}
                        </div>
                        <div className="space-y-2">
                            <p className="text-5xl md:text-6xl font-bold text-purple-600 dark:text-white drop-shadow-lg group-hover:scale-110 transition-transform inline-block">{stat.value}</p>
                            <p className="text-lg text-muted-foreground dark:text-white/95 font-semibold">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);