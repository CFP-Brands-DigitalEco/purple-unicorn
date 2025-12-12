import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function LogosStatsSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-6">
            We Don't Guess What Companies Need — We Listen…Then Help Define It.
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto text-lg text-slate-800">
            <p>
              Shaping hiring strategies across a wide range of industries is Purple Unicorn's fungible super power.
            </p>
            <p>
              Drawing on decades of experience at today's leading Fortune 500 companies, we've sat on both sides of the hiring table and bring that insight to every search, strategy, and solution we deliver.
            </p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-12 flex justify-center">
          <Image
            src="/images/long-client-logo-list.webp"
            alt="Our Fortune 500 Clients"
            width={900}
            height={90}
            className="w-full max-w-4xl h-auto opacity-70"
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {/* Stat 1 */}
          <div className="bg-white rounded-lg border border-slate-100 p-6 flex flex-col justify-center items-center h-full">
            <div className="text-3xl font-bold text-[#4f2170] mb-2">10,000+</div>
            <div className="text-slate-700 text-sm font-semibold text-center leading-snug">
              Successful Professional Placements
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-lg border border-slate-100 p-6 flex flex-col justify-center items-center h-full">
            <div className="text-3xl font-bold text-[#4f2170] mb-2">300+</div>
            <div className="text-slate-700 text-sm font-semibold text-center leading-snug">
              Fortune-500 Placements
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-lg border border-slate-100 p-6 flex flex-col justify-center items-center h-full">
            <div className="text-3xl font-bold text-[#4f2170] mb-2">100+</div>
            <div className="text-slate-700 text-sm font-semibold text-center leading-snug">
              Years of HR Leadership Experience
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="primary" href="/b2b-services" className="text-base px-10 py-4">
            <span className="uppercase tracking-wider">HIRE. GROW. RETAIN.</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
