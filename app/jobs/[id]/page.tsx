'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { mockJobs } from '@/lib/mockJobs';
import { Button } from '@/components/ui/Button';

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;

  const job = mockJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-slate-700 mb-4">Job Not Found</h1>
            <p className="text-slate-500 mb-8">
              The job you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Button variant="primary" href="/jobs">
              Back to All Jobs
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  const getJobTypeStyles = (type: string) => {
    switch (type) {
      case 'Remote':
        return 'bg-green-100 text-green-800';
      case 'Full-Time':
        return 'bg-blue-100 text-blue-800';
      case 'Part-Time':
        return 'bg-yellow-100 text-yellow-800';
      case 'Contract':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleApply = () => {
    if (job.applicationUrl) {
      window.open(job.applicationUrl, '_blank');
    } else if (job.contactEmail) {
      window.location.href = `mailto:${job.contactEmail}?subject=Application for ${job.title}`;
    }
  };

  return (
    <div className="bg-[#f5f5f7] min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 py-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => router.push('/jobs')}
              className="inline-flex items-center gap-2 text-[#4f2170] hover:text-[#6b2f96] font-semibold mb-6 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Jobs
            </button>

            {/* Job Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#4f2170] mb-3">
                    {job.title}
                  </h1>
                  <p className="text-xl font-semibold text-slate-700 mb-2">{job.company}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${getJobTypeStyles(job.type)}`}>
                  {job.type}
                </span>
              </div>

              {/* Job Meta Info */}
              <div className="flex flex-wrap gap-4 text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{job.location}</span>
                </div>
                {job.salaryRange && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{job.salaryRange}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Posted {formatDate(job.postedDate)}</span>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApply}
                className="px-8 py-4 bg-[#4f2170] text-white font-bold text-lg rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Job Details Section */}
      <div className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 space-y-8">
              {/* Job Description */}
              <section>
                <h2 className="text-2xl font-bold text-[#4f2170] mb-4">Job Description</h2>
                <p className="text-slate-700 leading-relaxed">{job.description}</p>
              </section>

              {/* Responsibilities */}
              <section>
                <h2 className="text-2xl font-bold text-[#4f2170] mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#4f2170] font-bold text-xl mt-1 flex-shrink-0">•</span>
                      <span className="text-slate-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="text-2xl font-bold text-[#4f2170] mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#4f2170] font-bold text-xl mt-1 flex-shrink-0">✓</span>
                      <span className="text-slate-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Benefits */}
              {job.benefits && job.benefits.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-[#4f2170] mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#4f2170] font-bold text-xl mt-1 flex-shrink-0">★</span>
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Apply Section */}
              <section className="pt-6 border-t border-slate-200">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#4f2170] mb-3">Ready to Apply?</h3>
                  <p className="text-slate-700 mb-4">
                    Take the next step in your career journey and join an exceptional team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleApply}
                      className="px-8 py-3 bg-[#4f2170] text-white font-bold rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 cursor-pointer"
                    >
                      Apply Now
                    </button>
                    {job.contactEmail && (
                      <a
                        href={`mailto:${job.contactEmail}?subject=Question about ${job.title}`}
                        className="px-8 py-3 border-2 border-[#4f2170] text-[#4f2170] font-bold rounded-lg hover:bg-[#4f2170] hover:text-white transition-colors duration-200 text-center cursor-pointer"
                      >
                        Contact Us
                      </a>
                    )}
                  </div>
                </div>
              </section>
            </div>

            {/* Back to Jobs Link */}
            <div className="mt-8 text-center">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 text-[#4f2170] hover:text-[#6b2f96] font-semibold transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                View All Jobs
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
