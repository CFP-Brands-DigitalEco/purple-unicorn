import type { Metadata } from 'next';
import { TestimonialsClient } from './TestimonialsClient';

export const metadata: Metadata = {
  title: "Client Success Stories & Testimonials | Purple Unicorn",
  description: "Read real success stories from clients who achieved their career goals and built exceptional teams through Purple Unicorn's career coaching and talent acquisition services.",
  keywords: ["testimonials", "client success stories", "career coaching reviews", "talent acquisition testimonials", "client reviews"],
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: "Client Success Stories & Testimonials | Purple Unicorn",
    description: "Read real success stories from clients who achieved their career goals and built exceptional teams",
    url: 'https://purpluni.com/testimonials',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
