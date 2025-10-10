"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Users } from 'lucide-react';

const testimonials = [
  { name: "Priya Sharma", company: "CEO, TechVista Mumbai", text: "Webboin transformed our digital presence. Their SEO strategy doubled our organic traffic in just three months, and the ROI has been phenomenal!", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", rating: 5 },
  { name: "Rajesh Kumar", company: "Founder, FoodieExpress Bangalore", text: "The paid advertising campaigns exceeded all expectations. Professional, data-driven, and incredibly responsive. Our best marketing investment yet.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d", rating: 5 },
  { name: "Ananya Patel", company: "CMO, StyleBazaar Delhi", text: "Their social media expertise is unmatched. Our engagement rates tripled, and we've built an amazing community around our brand.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d", rating: 5 },
];

const TestimonialSkeleton = () => (
    <Card className="border-0 shadow-none">
        <CardContent className="p-6 text-center space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6 mx-auto" />
            <div className="flex items-center justify-center space-x-3 pt-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32" />
                </div>
            </div>
        </CardContent>
    </Card>
);

export const TestimonialsSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="container-center">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-purple-900/30 border border-gray-200 dark:border-purple-800">
                        <Users className="h-4 w-4 text-gray-600 dark:text-purple-400" />
                        <span className="text-sm font-medium text-gray-600 dark:text-purple-400">Testimonials</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-heading">What Our Clients Say</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
                        Don't just take our word for it. Hear from businesses we've helped grow.
                    </p>
                </div>
                <div className="relative mt-12 max-w-4xl mx-auto">
                    <div className="overflow-hidden rounded-3xl">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                            {isLoading ? (
                                <div className="w-full flex-shrink-0"><TestimonialSkeleton /></div>
                            ) : (
                                testimonials.map((testimonial, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <Card className="border-2 shadow-lg transition-shadow bg-background">
                                            <CardContent className="p-8 md:p-12 relative">
                                                <div className="absolute top-8 left-8 text-gray-200 dark:text-gray-600/10">
                                                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                    </svg>
                                                </div>
                                                <div className="flex gap-1 mb-6 justify-center">
                                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                        <svg key={i} className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-lg md:text-xl text-center mb-8 italic leading-relaxed font-medium relative z-10">"{testimonial.text}"</p>
                                                <div className="flex items-center justify-center gap-4">
                                                    <Avatar className="h-16 w-16 border-4 border-purple-500">
                                                        <AvatarImage src={testimonial.avatar} />
                                                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-500 text-xl">{testimonial.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="text-left">
                                                        <p className="font-bold text-lg">{testimonial.name}</p>
                                                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{testimonial.company}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2.5 rounded-full transition-all hover:scale-110 ${
                                    index === activeIndex ? 'w-10 bg-gradient-to-r from-purple-600 to-indigo-500' : 'w-2.5 bg-gray-300 dark:bg-gray-600'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};