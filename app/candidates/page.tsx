import type { Metadata } from 'next';
import { CandidatesHeroSection } from '@/components/sections/CandidatesHeroSection';
import { CareerRealitySection } from '@/components/sections/CareerRealitySection';
import { CandidateMethodologySection } from '@/components/sections/CandidateMethodologySection';
import { ConorHighlightSection } from '@/components/sections/ConorHighlightSection';

export const metadata: Metadata = {
  title: "Career Coaching for Candidates | Purple Unicorn",
  description: "Professional career coaching services to help you reach your maximum potential. Expert guidance for career transitions, job search strategy, and professional development.",
  keywords: ["career coaching", "job search help", "career transition", "resume building", "interview prep", "professional development"],
  alternates: {
    canonical: '/candidates',
  },
  openGraph: {
    title: "Career Coaching for Candidates | Purple Unicorn",
    description: "Professional career coaching services to help you reach your maximum potential for impact",
    url: 'https://purpluni.com/candidates',
    type: 'website',
  },
};

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
