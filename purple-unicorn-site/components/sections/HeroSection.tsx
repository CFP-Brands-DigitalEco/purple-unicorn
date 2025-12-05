import Image from 'next/image';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="bg-[#f7f3ff]">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          {/* Text Content */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-[#4f2170] font-semibold text-base uppercase tracking-wide mb-3">
              Empowering Talent. Transforming Teams.
            </p>

            <h1 className="font-bold leading-tight text-[#4f2170] text-3xl md:text-4xl lg:text-5xl">
              We Position Top Candidates and Build World-Class Teams.
            </h1>

            <div className="space-y-5 text-slate-800 text-lg leading-relaxed">
              <p>
                We help modern companies grow — with purpose — through culture-first Recruiting, expert HR consultancy, and scalable talent culture and infrastructure.
              </p>

              <p>
                Contributing to that growth is the power of our network, and the high-achieving candidates we identify and prepare — at every career stage. Purple Unicorn's full cycle and unique B2B offerings are fueled by decades of Fortune 500 global Talent Acquisition and Human Resources leadership experience — and PASSION.
              </p>

              <p>
                Whether you're a company curating and hiring a team or developing and advancing a current one…
              </p>
            </div>

            <p className="text-xl font-bold text-[#4f2170] italic">
              …We have the solutions so rare, they're almost mythical.
            </p>

            <div className="pt-4">
              <Button variant="primary" href="/b2b-services" className="text-base px-8 py-3">
                <span className="uppercase tracking-wider">HIRE. GROW. RETAIN.</span>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/homepage-team-image.webp"
                alt="Team of professionals"
                width={340}
                height={440}
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
