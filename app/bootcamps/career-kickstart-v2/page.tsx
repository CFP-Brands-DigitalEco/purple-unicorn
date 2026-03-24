import type { Metadata } from 'next';
import { CareerKickstartV2 } from './CareerKickstartV2';

export const metadata: Metadata = {
  title: 'Career Kickstart — Design Option 2 | Purple Unicorn',
  robots: { index: false },
};

export default function CareerKickstartV2Page() {
  return <CareerKickstartV2 />;
}
