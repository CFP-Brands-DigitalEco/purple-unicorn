import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ExploreTabuUnitSection } from '@/components/sections/ExploreTabuUnitSection';

export const metadata: Metadata = {
  title: "HR & Talent Acquisition Services | Purple Unicorn",
  description: "Embedded HR consultancy and talent acquisition for growing organizations. Culture-first people infrastructure, scalable hiring systems, and strategic recruiting — all in one embedded partner.",
  keywords: ["embedded HR", "talent acquisition services", "hr consultancy", "embedded recruiting", "people operations", "hr infrastructure"],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "HR & Talent Acquisition Services | Purple Unicorn",
    description: "Embedded HR consultancy and talent acquisition for growing organizations",
    url: 'https://purpluni.com/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f7f3ff] py-14 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <p className="text-[#4f2170] font-semibold text-base uppercase tracking-wide">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4f2170] leading-tight">
              Embedded HR & Talent Acquisition
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              We operate as an extension of your organization — building the people infrastructure, hiring systems, and talent strategies that drive sustainable growth.
            </p>
          </div>
        </Container>
      </section>

      {/* Two-card service overview */}
      <ExploreTabuUnitSection
        taHref="/b2b-services/talent-acquisition"
        hrHref="/b2b-services/hr-consultancy"
      />
    </>
  );
}
