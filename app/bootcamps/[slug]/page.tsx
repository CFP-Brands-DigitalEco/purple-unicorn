import { notFound } from 'next/navigation';
import { bootcamps } from '@/lib/bootcamps';
import { BootcampDetailClient } from './BootcampDetailClient';

export async function generateStaticParams() {
  return bootcamps.map((bootcamp) => ({
    slug: bootcamp.slug,
  }));
}

interface BootcampDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BootcampDetailPage({ params }: BootcampDetailPageProps) {
  const { slug } = await params;
  const bootcamp = bootcamps.find((b) => b.slug === slug);

  if (!bootcamp) {
    notFound();
  }

  // Only show the new detailed content for college-coaching-bootcamp
  if (slug !== 'college-coaching-bootcamp') {
    return <div>Bootcamp details coming soon.</div>;
  }

  return <BootcampDetailClient />;
}
