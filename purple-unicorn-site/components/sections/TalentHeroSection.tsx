import Image from 'next/image';
import { Button } from '../ui/Button';

export function TalentHeroSection() {
  return (
    <section className="bg-[#f7f3ff]">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
          {/* Text Content */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-[#4f2170] font-semibold text-base uppercase tracking-wide mb-3">
              Proven Talent Acquisition + HR Services
            </p>

            <h1 className="font-bold leading-tight text-[#4f2170] text-3xl md:text-4xl lg:text-4xl">
              Your Embedded Talent & HR Partner — Without the Headcount, Payroll, or Headaches.
            </h1>

            <div className="space-y-5 text-slate-800 text-base leading-relaxed">
              <p>
                We help growth-stage companies attract aligned talent, hire with confidence, and install scalable fully-managed HR systems.
              </p>

              <p>
                From executive recruiting to compliant onboarding and retention systems, we act as a true extension of your business – solving the people side of growth so you can stay focused on building the rest.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="primary" href="/get-started" className="text-lg px-10 py-4">
                Find Your Solution
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/talent-acquisition-header.webp"
                alt="Talent Acquisition"
                width={400}
                height={500}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
