import Image from 'next/image';
import { Container } from '../layout/Container';

export function FounderSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/headshots/Jenni-headshot.webp"
                alt="Jenni Smith"
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
                Jenni Smith
              </h2>
              <p className="text-xl text-slate-600 font-semibold">
                Chief Executive Officer/Founder, Purple Unicorn
              </p>
            </div>

            <div className="space-y-4 text-slate-800 text-lg leading-relaxed">
              <p>
                Jenni is the architect behind hundreds of successful careers with 29+ years of experience leading talent development and acquisition at some of the world's most influential companies.
              </p>

              <p>
                Her ability to translate decades of enterprise hiring insight into clear, actionable strategies is what truly sets her apart.
              </p>

              <p>
                Whether you're a company looking to scale with the right people, or a professional ready to level up — Jenni built Purple Unicorn to be the partner that helps you do it.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                <p className="text-slate-800">
                  29+ years of talent leadership at top-tier Fortune 500 companies
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                <p className="text-slate-800">
                  Deep insight into how global hiring processes across all levels — from career launch to seasoned executive
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                <p className="text-slate-800">
                  Proven record of advancing and accelerating individuals and teams across diverse industries and regions
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                <p className="text-slate-800">
                  Vast executive network and immersive expertise across today's challenging employment landscape
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
