import type { Metadata } from 'next';
import { CareerKickstartClient } from './CareerKickstartClient';

export const metadata: Metadata = {
  title: 'Career Kickstart — 90-Minute Internship & Job Training | Purple Unicorn',
  description:
    'A live 90-minute workshop where students learn how to improve their resume, strengthen their LinkedIn profile, reach out to alumni, and tell their story in interviews. $99.',
  keywords: [
    'internship coaching',
    'career kickstart',
    'student career training',
    'resume help',
    'LinkedIn optimization',
    'interview prep for students',
  ],
  alternates: {
    canonical: '/bootcamps/career-kickstart',
  },
  openGraph: {
    title: 'Career Kickstart: How to Stand Out and Land an Internship | Purple Unicorn',
    description:
      'A live 90-minute workshop for students applying to internships and full-time roles. Learn resume strategy, LinkedIn optimization, and interview storytelling. $99.',
    url: 'https://purpluni.com/bootcamps/career-kickstart',
    type: 'website',
  },
};

export default function CareerKickstartPage() {
  return <CareerKickstartClient />;
}
