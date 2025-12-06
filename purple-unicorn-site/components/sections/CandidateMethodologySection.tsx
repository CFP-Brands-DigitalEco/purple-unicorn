import Image from 'next/image';
import { Container } from '../layout/Container';

const methodologySteps = [
  {
    icon: '/icons/market-intelligence.webp',
    title: 'Market Intelligence',
    body: 'Learn how hiring really happens behind closed doors in your industry - from unspoken decision criteria to the backchannels most candidates miss.',
  },
  {
    icon: '/icons/strategic-positioning.webp',
    title: 'Strategic Positioning',
    body: 'Crafting a compelling professional narrative and presence that speaks to what decision-makers are actually looking for - and positions you as the obvious choice.',
  },
  {
    icon: '/icons/network-activation.webp',
    title: 'Network Activation',
    body: 'Leverage targeted intros, warm connections, and insider-backed messaging to bypass resume piles and spark real conversations.',
  },
  {
    icon: '/icons/results-tracking.webp',
    title: 'Results Tracking',
    body: 'Never guess and always measure. Every strategy is backed by metrics so we can course-correct in real-time and ensure your momentum never stalls.',
  },
];

export function CandidateMethodologySection() {
  return (
    <section className="py-20 bg-[#f7f3ff]">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4f2170] mb-2">
            The Purple Unicorn Methodology
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-6">
            Your Strategic Edge in a Noisy Market
          </h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            We blend decades of Fortune 500 hiring insight with proven strategic frameworks to help you stand out, leaving your interviewers wanting more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {methodologySteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="w-20 h-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#4f2170] mb-3">
                {step.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
