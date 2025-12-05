import { HeroSection } from '@/components/sections/HeroSection';
import { MissionsSection } from '@/components/sections/MissionsSection';
import { LogosStatsSection } from '@/components/sections/LogosStatsSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

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
