import { AgencyIntro } from '@/components/about/AgencyIntro';
import { TeamSection } from '@/components/about/TeamSection';
import { StatsSection } from '@/components/about/StatsSection';
import { CTASection } from '@/components/about/CTASection';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <AgencyIntro />
        <TeamSection />
        <StatsSection />
        <CTASection />
      </main>
    </div>
  );
}
