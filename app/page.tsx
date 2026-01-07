import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { MissionsSection } from '@/components/sections/MissionsSection';
import { LogosStatsSection } from '@/components/sections/LogosStatsSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: "Purple Unicorn | Full Cycle Talent Solutions - Career Coaching & HR Services",
  description: "We support advancing organizations and professionals of all levels to reach their maximum potential for impact through career coaching, talent acquisition, and HR consulting.",
  keywords: ["career coaching", "hr services", "hr consulting", "talent acquisition", "recruitment", "career development", "professional development"],
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
