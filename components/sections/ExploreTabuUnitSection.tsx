import Link from 'next/link';
import { Container } from '../layout/Container';

interface ExploreTabuUnitSectionProps {
  taHref?: string;
  hrHref?: string;
}

export function ExploreTabuUnitSection({ taHref, hrHref }: ExploreTabuUnitSectionProps = {}) {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Talent Acquisition Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col h-full shadow-sm">
            {/* Header with Icon */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-9 h-9 bg-[#4f2170] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 leading-tight">
                  Talent Acquisition
                </h3>
                <p className="text-sm text-[#4f2170] font-semibold mt-1">
                  Embedded Recruitment for High-Growth Teams
                </p>
              </div>
            </div>

            {/* Strategic Description */}
            <p className="text-base text-slate-800 leading-relaxed mb-6">
              Functions as your in-house recruiting team — without the overhead. We partner with your leadership to understand the business, develop candidate pipeline, and create sourcing strategies that attract the right talent. Whether you're growing headcount fast or hiring for key leadership roles, we deliver a recruitment engine that evolves with your business.
            </p>

            {/* Features List */}
            <ul className="space-y-3 grow">
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Embedded recruiters that act as internal partners</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Detailed sourcing strategy</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Custom-built recruiting workflows & systems</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Active pipeline development & role prioritization</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Advisory on hiring strategy, equity, and process</span>
              </li>
            </ul>

            {taHref && (
              <div className="mt-6 pt-6 border-t border-slate-100">
                <Link
                  href={taHref}
                  className="inline-flex items-center gap-2 text-[#4f2170] font-semibold hover:text-[#3d1958] transition-colors text-sm"
                >
                  Explore Talent Acquisition <span>→</span>
                </Link>
              </div>
            )}
          </div>

          {/* HR Solutions Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col h-full shadow-sm">
            {/* Header with Icon */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 leading-tight">
                  HR Consultancy
                </h3>
                <p className="text-sm text-[#7e22ce] font-semibold mt-1">
                  On-Demand HR Built for Scale
                </p>
              </div>
            </div>

            {/* Strategic Description */}
            <p className="text-base text-slate-800 leading-relaxed mb-6">
              Your embedded HR business unit. We handle the full employee lifecycle from onboarding and compliance to culture design and team development. You get senior HR strategy without the headcount, complexity, or cost of building it in-house.
            </p>

            {/* Features List */}
            <ul className="space-y-3 grow">
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Embedded fractional HR team</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Employment policies, documentation & compliance</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Scalable onboarding & offboarding systems</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Culture building & retention programs</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-800">
                <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                <span>Conflict resolution & employee relations</span>
              </li>
            </ul>

            {hrHref && (
              <div className="mt-6 pt-6 border-t border-slate-100">
                <Link
                  href={hrHref}
                  className="inline-flex items-center gap-2 text-[#4f2170] font-semibold hover:text-[#3d1958] transition-colors text-sm"
                >
                  Explore HR Consultancy <span>→</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
