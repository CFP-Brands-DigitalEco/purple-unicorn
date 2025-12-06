import Image from 'next/image';
import { Button } from '../ui/Button';

export function CandidatesHeroSection() {
  return (
    <section className="bg-[#f7f3ff]">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
          <div className="space-y-6 max-w-2xl">
            <p className="text-[#4f2170] font-semibold text-base uppercase tracking-wide mb-3">
              Designed For Career Momentum & Alignment.
            </p>
            <h1 className="font-bold leading-tight text-[#4f2170] text-3xl md:text-4xl lg:text-4xl">
              Candidates — Reimagined by Executive Recruiters Who Know What Actually Works
            </h1>
            <div className="space-y-5 text-slate-800 text-base leading-relaxed">
              <p>
                From recent grads to seasoned execs making bold pivots, we help our candidates clarify their value and elevate their professional brand — confidently navigating every step from outreach to offer negotiation.
              </p>
              <p>
                Our high-touch candidate preparation model spans across the expertise of former Fortune 500 recruiters with decades of combined experience.
              </p>
            </div>
            <div className="pt-4">
              <Button variant="primary" href="/get-started" className="text-lg px-10 py-4">
                Let's Talk Career Strategy
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/candidates-header.webp"
              alt="Professional facing two arrows symbolizing career direction"
              width={400}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
