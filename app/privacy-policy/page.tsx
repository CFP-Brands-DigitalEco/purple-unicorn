import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy | Purple Unicorn',
  description: 'Privacy policy for Purple Unicorn Enterprises.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <h1 className="text-4xl font-bold text-[#4f2170] mb-8">Privacy Policy</h1>
        <p className="text-slate-700 text-lg">
          This page is under construction. Please contact{' '}
          <a href="mailto:info@purpluni.com" className="text-[#4f2170] underline">
            info@purpluni.com
          </a>{' '}
          for any questions regarding our privacy policy.
        </p>
      </Container>
    </section>
  );
}
