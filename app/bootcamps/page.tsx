import { Container } from '@/components/layout/Container';
import { BootcampCard } from '@/components/bootcamps/BootcampCard';
import { bootcamps } from '@/lib/bootcamps';

export default function BootcampsPage() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4f2170] to-[#6b2f96] text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide mb-4">
              Programs & Experiences
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bootcamps
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              High-impact, small-group programs led by experienced Fortune 500 talent executives
            </p>
          </div>
        </Container>
      </div>

      {/* Intro Section */}
      <div className="bg-white border-b border-slate-200 py-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              Our bootcamps are designed to transform uncertainty into confidence and momentum.
              Whether you&apos;re a student preparing for your career journey, a campus organization
              seeking proven programs for your community, or an employer investing in early-career talent,
              our intensive coaching experiences deliver practical tools, strategic clarity, and lasting impact.
            </p>
          </div>
        </Container>
      </div>

      {/* Bootcamp Grid */}
      <div className="py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bootcamps.map((bootcamp) => (
                <BootcampCard key={bootcamp.id} bootcamp={bootcamp} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
