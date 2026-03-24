import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { bootcamps } from '@/lib/bootcamps';
import { BootcampDetailClient } from './BootcampDetailClient';

// Exclude slugs that have their own dedicated static page under /bootcamps/[slug-name]/
const DEDICATED_PAGES = ['career-kickstart'];

export async function generateStaticParams() {
  return bootcamps
    .filter((b) => !DEDICATED_PAGES.includes(b.slug))
    .map((bootcamp) => ({
      slug: bootcamp.slug,
    }));
}

interface BootcampDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BootcampDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const bootcamp = bootcamps.find((b) => b.slug === slug);

  if (!bootcamp) {
    return {
      title: 'Bootcamp Not Found | Purple Unicorn',
    };
  }

  return {
    title: `${bootcamp.name} | Purple Unicorn`,
    description: bootcamp.description,
    keywords: ["career bootcamp", "career coaching", bootcamp.name, "professional development"],
    alternates: {
      canonical: `/bootcamps/${slug}`,
    },
    openGraph: {
      title: `${bootcamp.name} | Purple Unicorn`,
      description: bootcamp.description,
      url: `https://purpluni.com/bootcamps/${slug}`,
      type: 'website',
    },
  };
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
