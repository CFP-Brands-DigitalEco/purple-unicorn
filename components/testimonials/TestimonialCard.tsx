'use client';

import { useState } from 'react';
import { Testimonial } from '@/lib/testimonials';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 300;
  const shouldTruncate = testimonial.quote.length > maxLength;
  const displayQuote = !shouldTruncate || isExpanded
    ? testimonial.quote
    : testimonial.quote.slice(0, maxLength) + '...';

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
      {/* Quote icon */}
      <div className="text-[#4f2170] mb-4">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote text */}
      <p className="text-slate-700 mb-4 leading-relaxed">
        {displayQuote}
      </p>

      {/* Read more toggle */}
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#4f2170] text-sm font-semibold hover:underline mb-4"
        >
          {isExpanded ? 'Read less' : 'Read more...'}
        </button>
      )}

      {/* Author info */}
      <div className="border-t border-slate-200 pt-4">
        <p className="font-semibold text-slate-900">{testimonial.name}</p>
        <p className="text-sm text-slate-600">
          {testimonial.role}
          {testimonial.company && ` at ${testimonial.company}`}
        </p>
      </div>
    </div>
  );
}
