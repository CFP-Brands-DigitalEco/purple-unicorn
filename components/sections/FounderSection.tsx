import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../layout/Container';

export function FounderSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-sm bg-slate-200">
              <Image
                src="/headshots/Melissa-headshot.webp"
                alt="Melissa Rothschild"
                width={450}
                height={550}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-2">
                Melissa Rothschild
              </h2>
              <p className="text-xl text-slate-600 font-semibold">
                Chief Executive Officer, Purple Unicorn
              </p>
            </div>

            <div className="space-y-4 text-slate-800 text-lg leading-relaxed">
              <p>
                Melissa leads Purple Unicorn with a clear focus: building people infrastructure that scales and talent strategies that hold. With 20+ years across talent acquisition, operations, and organizational development, she brings the strategic depth and execution capability that modern organizations need in a people partner.
              </p>

              <p>
                Her work spans mission-driven nonprofits, growth-stage companies, and established organizations including Northwestern Mutual, Allstate, and Halfmoon Empanadas — built on years as Purple Unicorn&apos;s Head of Talent Acquisition and COO before stepping into the CEO role.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                <p className="text-slate-800">
                  20+ years of experience in talent acquisition, people operations, and organizational development
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                <p className="text-slate-800">
                  Builder of scalable hiring systems, embedded recruiting frameworks, and culture-first HR programs
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                <p className="text-slate-800">
                  Proven record across nonprofits, media, and high-growth organizations
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                <p className="text-slate-800">
                  Member of BNI, Television Academy, and Casting Society of America (CSA)
                </p>
              </div>
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-[#4f2170] font-semibold hover:text-[#3d1958] transition-colors">
              Meet our team <span>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
