import type { Metadata } from 'next';
import Link from 'next/link';
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
      <ExploreTabuUnitSection />

      {/* CTAs */}
      <section className="py-16 bg-[#f7f3ff]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] text-center mb-12">
              Explore Our Service Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/b2b-services/talent-acquisition"
                className="group block rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-[#4f2170] transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4f2170] transition-colors">
                  Talent Acquisition
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Full-cycle recruiting, embedded sourcing, executive search, and custom hiring workflows — built around your team, culture, and growth trajectory.
                </p>
                <span className="text-[#4f2170] font-semibold text-sm">
                  Explore Talent Acquisition →
                </span>
              </Link>

              <Link
                href="/b2b-services/hr-consultancy"
                className="group block rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-[#4f2170] transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4f2170] transition-colors">
                  HR Consultancy
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Fractional HR leadership, compliance, onboarding systems, culture programs, and people operations strategy — your embedded HR business unit.
                </p>
                <span className="text-[#4f2170] font-semibold text-sm">
                  Explore HR Consultancy →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
