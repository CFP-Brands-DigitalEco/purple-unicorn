import Image from 'next/image';
import { Container } from '../layout/Container';

export function ProvenMethodologySection() {
  const steps = [
    {
      icon: '/icons/discovery-alignment.webp',
      title: 'Discovery & Alignment',
      description: 'Deep dive into your business objectives, culture, and specific talent needs',
    },
    {
      icon: '/icons/strategy-development.webp',
      title: 'Strategy Development',
      description: 'Custom talent acquisition strategy with clear timelines and success metrics',
    },
    {
      icon: '/icons/execution-sourcing.webp',
      title: 'Execution & Sourcing',
      description: 'Active candidate sourcing, screening, and presentation of qualified candidates',
    },
    {
      icon: '/icons/integration-success.webp',
      title: 'Integration & Success',
      description: 'We stay engaged beyond the hire supporting onboarding, feedback loops, and long-term talent retention.',
    },
  ];

  return (
    <section className="py-20 bg-[#f7f3ff]">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-4">
            Our Proven Methodology
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            A proven methodology that ensures successful talent acquisition and long-term partnership success
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="w-20 h-auto object-contain"
                />
              </div>

              {/* Step Number */}
              <div className="text-sm font-bold text-[#4f2170] uppercase tracking-wide mb-3">
                Step {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-slate-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
