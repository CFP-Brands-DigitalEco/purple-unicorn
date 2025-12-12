import Image from 'next/image';
import { Container } from '../layout/Container';

const challenges = [
  {
    icon: '/icons/resume-black-holes.webp',
    title: 'Resume Black Holes & AI Blind Spots',
    body: 'You\'re qualified, but your application vanishes before it reaches a real decision-maker.',
  },
  {
    icon: '/icons/interview-anxiety.webp',
    title: 'Interview Anxiety',
    body: 'Knowing you\'re qualified but struggling to communicate value in high-stakes conversations. You freeze, ramble, or undersell yourself.',
  },
  {
    icon: '/icons/salary-stagnation.webp',
    title: 'Salary Stagnation',
    body: 'You\'re underpaid, undervalued, and unsure how to navigate salary conversations with confidence.',
  },
  {
    icon: '/icons/network-gaps.webp',
    title: 'Network Gaps',
    body: 'You are missing the insider connections that actually influence hiring decisions.',
  },
  {
    icon: '/icons/strategic-blindness.webp',
    title: 'Strategic Blindness',
    body: 'Focusing on tactics without understanding the bigger picture of career positioning. You\'re chasing roles, not designing a career.',
  },
  {
    icon: '/icons/time-wasted.webp',
    title: 'Time Wasted',
    body: 'You\'re stuck in a loop of "hope and apply" wasting months (or years) on guesswork instead of making real progress.',
  },
];

export function CareerRealitySection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4f2170] mb-6">
            Career Advancement Reality
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Traditional career advice fails because it treats symptoms, not root causes. These are the silent blockers that keep high-potential professionals from advancing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm"
            >
              <div className="mb-4">
                <Image
                  src={challenge.icon}
                  alt={challenge.title}
                  width={60}
                  height={60}
                  className="w-15 h-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#4f2170] mb-3">
                {challenge.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {challenge.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
