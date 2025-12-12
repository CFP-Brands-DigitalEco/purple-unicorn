import { CandidatesHeroSection } from '@/components/sections/CandidatesHeroSection';
import { CareerRealitySection } from '@/components/sections/CareerRealitySection';
import { CandidateMethodologySection } from '@/components/sections/CandidateMethodologySection';
import { ConorHighlightSection } from '@/components/sections/ConorHighlightSection';

export default function CandidatesPage() {
  return (
    <main>
      <CandidatesHeroSection />
      <CareerRealitySection />
      <CandidateMethodologySection />
      <ConorHighlightSection />
    </main>
  );
}
