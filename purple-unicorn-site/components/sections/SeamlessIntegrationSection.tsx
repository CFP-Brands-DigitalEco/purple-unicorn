import Image from 'next/image';
import { Container } from '../layout/Container';

export function SeamlessIntegrationSection() {
  const integrations = [
    {
      icon: '/icons/ATS-systems.webp',
      title: 'ATS Systems',
      description: 'Workday, Greenhouse, Lever, BambooHR, and more',
    },
    {
      icon: '/icons/HRIS-platforms.webp',
      title: 'HRIS Platforms',
      description: 'Rippling, Gusto, ADP, Paycom integration',
    },
    {
      icon: '/icons/communications.webp',
      title: 'Communication',
      description: 'Slack, Teams, email automation systems',
    },
    {
      icon: '/icons/analytics.webp',
      title: 'Analytics',
      description: 'Custom dashboards and reporting tools',
    },
  ];

  return (
    <section className="py-20 bg-[#f7f3ff]">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-4">
            Seamless Integration
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Our solutions integrate with your existing HR systems and workflows for maximum efficiency
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={integration.icon}
                  alt={integration.title}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#4f2170] mb-3">
                {integration.title}
              </h3>

              {/* Description */}
              <p className="text-base text-slate-700 leading-relaxed">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
