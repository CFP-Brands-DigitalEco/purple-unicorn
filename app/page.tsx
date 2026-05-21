import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { MissionsSection } from '@/components/sections/MissionsSection';
import { LogosStatsSection } from '@/components/sections/LogosStatsSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: "Purple Unicorn | Embedded HR & Talent Acquisition",
  description: "Culture-first HR consulting and embedded talent acquisition for growing organizations. Strategic people infrastructure, scalable hiring systems, and results that last.",
  keywords: ["embedded HR", "embedded recruiting", "hr consulting", "talent acquisition", "people operations", "hr services", "recruitment"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Purple Unicorn | Full Cycle Talent Solutions",
    description: "We support advancing organizations and professionals of all levels to reach their maximum potential for impact",
    url: 'https://purpluni.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionsSection />
      <LogosStatsSection />
      <ComparisonSection />
      <FounderSection />
      <TestimonialsSection />
    </>
  );
}
