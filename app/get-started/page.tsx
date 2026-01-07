import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: "Get Started | Purple Unicorn",
  description: "Ready to transform your career or build your dream team? Get started with Purple Unicorn's full-cycle talent solutions today.",
  keywords: ["get started", "career coaching", "talent acquisition", "hr consulting", "contact purple unicorn"],
  alternates: {
    canonical: '/get-started',
  },
  openGraph: {
    title: "Get Started | Purple Unicorn",
    description: "Ready to transform your career or build your dream team? Get started with Purple Unicorn today",
    url: 'https://purpluni.com/get-started',
    type: 'website',
  },
};

export default function GetStartedPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started with Purple Unicorn
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to find exceptional talent for your team? Let&apos;s begin your journey to building the team of your dreams.
          </p>
          <div className="bg-purple-50 rounded-lg p-8 text-left">
            <p className="text-gray-700">
              This page will be connected to our onboarding process soon.
              In the meantime, please contact us at{' '}
              <a href="mailto:info@purpluni.com" className="text-purple-600 hover:text-purple-700 font-semibold">
                info@purpluni.com
              </a>
              {' '}to get started.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
