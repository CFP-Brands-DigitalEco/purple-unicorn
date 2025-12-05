import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../layout/Container';

export function MissionsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-8">
            One Brand. Two Missions.
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-xl text-slate-800">
              <span className="font-bold text-[#4f2170]">One</span>
              <br />
              Empowering Businesses With Comprehensive HR Solutions—From Compliance To Culture.
            </p>
            <p className="text-xl text-slate-800">
              <span className="font-bold text-[#4f2170]">Two</span>
              <br />
              Connecting Organizations With Exceptional Talent Through Targeted, Strategic Recruiting That Drives Long-Term Growth And Cultural Fit.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Card 1 - HR Services */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/icons/hr-services-unit.webp"
                alt="HR Services"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#4f2170]">
                  HR Services (UNIt in a Box)
                </h3>
                <p className="text-slate-600 font-semibold mt-1">
                  Scalable and proven HR infrastructure without the overhead.
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Compliance and Risk Mitigation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Company Culture Embodiment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Employee-First Success Model</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Organizational Design and Scale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Global Compensation and Rewards</span>
              </li>
            </ul>

            <Link
              href="/b2b-services/hr-consultancy"
              className="text-[#4f2170] hover:text-[#3d1958] font-semibold inline-flex items-center gap-2"
            >
              Learn More
              <span>→</span>
            </Link>
          </div>

          {/* Card 2 - Strategic Recruiting */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/icons/TABU.webp"
                alt="Strategic Recruiting"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#4f2170]">
                  Strategic Recruiting & Talent Acquisition (TABU)
                </h3>
                <p className="text-slate-600 font-semibold mt-1">
                  Embedded, Fungible Recruiting Team
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Full life-cycle talent sourcing and recruitment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Custom, aligned recruitment playbook and hiring workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Executive Leadership Searches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Brand positioning and job market strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] mt-1">✓</span>
                <span className="text-slate-800">Internship Program Development</span>
              </li>
            </ul>

            <Link
              href="/b2b-services/talent-acquisition"
              className="text-[#4f2170] hover:text-[#3d1958] font-semibold inline-flex items-center gap-2"
            >
              Learn More
              <span>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
