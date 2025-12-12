import { Container } from '../layout/Container';

export function PeopleOpsBenefitsSection() {
  const benefits = [
    {
      title: 'Speed to Market',
      description: 'Get up and running in weeks, not months. Our proven systems and processes accelerate your time to value.',
    },
    {
      title: 'Proven Expertise',
      description: 'Benefit from strategies that have been tested and refined across hundreds of successful placements and scaling initiatives.',
    },
    {
      title: 'Scalable Solutions',
      description: 'From seed to Series C and beyond, our systems grow with you. We align with your culture, evolve with your team, and scale hiring as your business expands.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-6">
            Unicorn-powered people ops that scale with you — no headcount headaches, just hiring magic.
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            We Build the People Side of Your Business—So You Can Build the Rest. Fractional Talent & HR leadership, embedded with care.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
