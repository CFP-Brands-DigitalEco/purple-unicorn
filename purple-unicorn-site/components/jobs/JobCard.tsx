import Link from 'next/link';
import { Job } from '@/lib/mockJobs';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
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
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-[#4f2170] transition-all duration-200">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl font-bold text-[#4f2170] hover:text-[#6b2f96] transition-colors">
              <Link href={`/jobs/${job.id}`}>
                {job.title}
              </Link>
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getJobTypeStyles(job.type)}`}>
              {job.type}
            </span>
          </div>
          <p className="text-lg font-semibold text-slate-700 mb-1">{job.company}</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{job.location}</span>
            </div>
            {job.salaryRange && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{job.salaryRange}</span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 mb-4 line-clamp-3 flex-grow">
          {job.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <span className="text-sm text-slate-500">Posted {formatDate(job.postedDate)}</span>
          <Link
            href={`/jobs/${job.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f2170] text-white font-semibold rounded-lg hover:bg-[#6b2f96] transition-colors duration-200"
          >
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
