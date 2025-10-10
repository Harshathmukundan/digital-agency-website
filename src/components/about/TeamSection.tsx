"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users } from 'lucide-react';

const teamMembers = [
  { name: 'Arjun Mehta', role: 'Founder & CEO', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d', bio: 'Visionary leader with 10+ years in digital marketing' },
  { name: 'Sneha Reddy', role: 'Head of SEO', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d', bio: 'SEO expert driving organic growth strategies' },
  { name: 'Vikram Singh', role: 'Lead Ads Strategist', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d', bio: 'PPC specialist maximizing ROI for clients' },
  { name: 'Kavya Iyer', role: 'Social Media Director', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026710d', bio: 'Creative storyteller building brand communities' },
];

export const TeamSection = () => (
  <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
    <div className="container-center">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
          <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Our Team</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-heading">Meet Our Experts</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
          Talented professionals passionate about your success.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <Card key={member.name} className="group border-2 hover:border-purple-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-scale-in bg-background" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <Avatar className="h-28 w-28 border-4 border-purple-500 relative shadow-lg group-hover:scale-110 transition-transform">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{member.name}</h4>
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);