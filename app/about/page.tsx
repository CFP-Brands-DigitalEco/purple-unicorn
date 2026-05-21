import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { TeamMemberHighlightSection } from '@/components/sections/TeamMemberHighlightSection';

export const metadata: Metadata = {
  title: "About Us | Purple Unicorn",
  description: "Meet the leadership team behind Purple Unicorn — Melissa Rothschild, Conor Boland, and Jenni Smith. Culture-first embedded HR and talent acquisition for modern, growing organizations.",
  keywords: ["purple unicorn leadership", "melissa rothschild", "conor boland", "jenni smith", "embedded hr team", "talent acquisition leadership"],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Us | Purple Unicorn",
    description: "Meet the leadership team behind Purple Unicorn's embedded HR and talent acquisition practice",
    url: 'https://purpluni.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f7f3ff] py-14 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <p className="text-[#4f2170] font-semibold text-base uppercase tracking-wide">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4f2170] leading-tight">
              People-First. Operationally Grounded. Built to Scale.
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Purple Unicorn is an embedded HR and talent acquisition partner for modern, growth-focused organizations. We don&apos;t just fill roles or consult from the outside — we operate as a genuine extension of your team, building the systems, culture, and hiring infrastructure that make great organizations possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Melissa Rothschild */}
      <TeamMemberHighlightSection
        name="Melissa Rothschild"
        title="Chief Executive Officer, Purple Unicorn"
        imageSrc="/headshots/Melissa-headshot.webp"
        paragraphs={[
          "Melissa leads Purple Unicorn with a focus on what matters most: building people infrastructure that scales and hiring strategies that hold. With 20+ years of experience across talent acquisition, operations, and organizational development, she brings the strategic depth and execution capability that growing businesses need in a people partner.",
          "As CEO, Melissa drives the firm's national growth, client strategy, and embedded partnership model. Her work spans mission-driven nonprofits, high-growth companies, and established organizations — from Northwestern Mutual and Allstate to Halfmoon Empanadas. Before stepping into the CEO role, she served as Purple Unicorn's Head of Talent Acquisition and COO, building the systems and frameworks that define how the firm operates.",
          "Her background includes executive leadership in unscripted television — including roles at MTV Networks and as founder of Chatter TV — where she developed a sharp instinct for talent, culture, and high-performance teams. She is a member of BNI, the Television Academy, and the Casting Society of America (CSA).",
        ]}
        bullets={[
          "20+ years of experience in talent acquisition, people operations, and organizational development",
          "Builder of scalable recruiting systems, culture-first hiring frameworks, and embedded HR partnerships",
          "Operational leader with a track record across nonprofits, media, and high-growth businesses",
        ]}
      />

      {/* Conor Boland */}
      <TeamMemberHighlightSection
        name="Conor Boland"
        title="Co-Founder / Chief Talent Officer"
        imageSrc="/headshots/Conor-headshot.webp"
        className="bg-[#f7f3ff]"
        paragraphs={[
          "Conor co-founded Purple Unicorn to bridge the gap between great talent and the organizations that need it most. With 13+ years leading talent strategy across agency and corporate environments, he brings an inside-out understanding of how hiring decisions really get made — and how to position both candidates and companies to win.",
          "His approach is immersive by design: embedded, honest, and built around accountability. Conor has shaped talent caliber at companies like Ford, Amazon, Chewy, and Hitachi — supporting leaders from first-time managers to senior executives navigating complex organizational challenges.",
          "What drives him is the intersection of strategic clarity and human potential. He's not here to fill seats — he's here to build the kind of talent infrastructure that compounds over time.",
        ]}
        bullets={[
          "13+ years of talent development experience across agency and corporate environments",
          "Deep knowledge of competitive hiring markets in high-growth and enterprise organizations",
          "Partnership-driven approach grounded in honesty, strategic clarity, and forward momentum",
        ]}
      />

      {/* Jenni Smith */}
      <TeamMemberHighlightSection
        name="Jenni Smith"
        title="Co-Founder / Advisor, Purple Unicorn"
        imageSrc="/headshots/Jenni-headshot.webp"
        paragraphs={[
          "Jenni built Purple Unicorn on a founding belief: that talent strategy, when done right, is one of the most powerful levers a business has. With 29+ years of experience at Fortune 500 companies — and a track record spanning hiring at every level — she established the firm's culture-first approach to embedded partnership and people-first growth.",
          "In her advisory role, Jenni remains connected to Purple Unicorn's strategic direction, bringing her enterprise-level perspective to the firm's continued national and international expansion. Her insight into how great organizations hire, retain, and develop talent continues to shape the Purple Unicorn philosophy.",
        ]}
        bullets={[
          "29+ years of talent leadership across Fortune 500 organizations worldwide",
          "Architect of Purple Unicorn's embedded partnership model and culture-first talent philosophy",
        ]}
      />
    </>
  );
}
