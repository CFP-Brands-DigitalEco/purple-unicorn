import type { Metadata } from 'next';
import { TalentHeroSection } from '@/components/sections/TalentHeroSection';
import { ExploreTabuUnitSection } from '@/components/sections/ExploreTabuUnitSection';
import { ProvenMethodologySection } from '@/components/sections/ProvenMethodologySection';
import { PeopleOpsBenefitsSection } from '@/components/sections/PeopleOpsBenefitsSection';
import { SeamlessIntegrationSection } from '@/components/sections/SeamlessIntegrationSection';
import { TeamMemberHighlightSection } from '@/components/sections/TeamMemberHighlightSection';

export const metadata: Metadata = {
  title: "HR Consulting Services | Purple Unicorn",
  description: "Strategic HR consulting services to build and scale dynamic teams. Expert people operations with 20+ years of experience across high-stakes industries.",
  keywords: ["hr consulting", "hr services", "people operations", "human resources consulting", "workforce strategy"],
  alternates: {
    canonical: '/b2b-services/hr-consultancy',
  },
  openGraph: {
    title: "HR Consulting Services | Purple Unicorn",
    description: "Strategic HR consulting services to build and scale dynamic teams with expert people operations",
    url: 'https://purpluni.com/b2b-services/hr-consultancy',
    type: 'website',
  },
};

export default function HRConsultancyPage() {
  return (
    <>
      <TalentHeroSection />
      <ExploreTabuUnitSection />
      <ProvenMethodologySection />
      <PeopleOpsBenefitsSection />
      <SeamlessIntegrationSection />
      <TeamMemberHighlightSection
        name="Melissa Rothschild"
        title="Head of B2B Services, Purple Unicorn"
        imageSrc="/headshots/Melissa-headshot.webp"
        paragraphs={[
          "Melissa brings 20+ years of experience building and scaling dynamic teams across high-stakes industries. Before joining Purple Unicorn, she led executive recruitment and casting operations for four major television production companies – securing Emmy-winning talent and forging strategic partnerships with leading networks.",
          "Now, Melissa leads our embedded talent team with a focus on diversity, precision hiring, and brand-aligned recruitment strategy. She's passionate about transforming hiring into a powerful engine for innovation – using inclusive systems and deep stakeholder alignment to drive long-term retention and culture fit.",
          "She also serves as a member of both the Television Academy and the Casting Society of America (CSA), and is the founder of the boutique agency Chatter TV. When she's not shaping the future of recruitment, she's traveling with her partner Josh, their children Harrison and Layla, and their pup Luna."
        ]}
        bullets={[
          "20+ years of executive hiring and team-building experience across media and tech",
          "Led recruitment operations behind Emmy-winning productions"
        ]}
      />
    </>
  );
}
