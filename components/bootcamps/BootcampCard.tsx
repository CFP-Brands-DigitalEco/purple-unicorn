import Link from 'next/link';
import { Bootcamp } from '@/lib/bootcamps';

interface BootcampCardProps {
  bootcamp: Bootcamp;
}

export function BootcampCard({ bootcamp }: BootcampCardProps) {
  const getLocationTypeStyles = (type: string) => {
    switch (type) {
      case 'online':
        return 'bg-blue-100 text-blue-800';
      case 'in-person':
        return 'bg-green-100 text-green-800';
      case 'hybrid':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLocationTypeLabel = (type: string) => {
    switch (type) {
      case 'online':
        return 'Online';
      case 'in-person':
        return 'In-Person';
      case 'hybrid':
        return 'Hybrid';
      default:
        return type;
    }
  };

  // Extract first sentence from description
  const descriptionExcerpt = bootcamp.description.split('.')[0] + '.';

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-[#4f2170] transition-all duration-200">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#4f2170] hover:text-[#6b2f96] transition-colors mb-2">
            <Link href={`/bootcamps/${bootcamp.slug}`}>
              {bootcamp.name}
            </Link>
          </h3>
          <p className="text-slate-600 italic text-sm mb-3">{bootcamp.tagline}</p>

          <div className="space-y-2">
            <p className="text-sm text-slate-600">
              <span className="font-semibold">Audience:</span> {bootcamp.audience}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{bootcamp.duration}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLocationTypeStyles(bootcamp.locationType)}`}>
                {getLocationTypeLabel(bootcamp.locationType)}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 mb-4 flex-grow">
          {descriptionExcerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-end pt-4 border-t border-slate-200">
          <Link
            href={`/bootcamps/${bootcamp.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f2170] text-white font-semibold rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 cursor-pointer"
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
