'use client';

import { useState } from 'react';
import { Container } from '../layout/Container';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Julia B.',
      role: 'Customer Success Lead, Norwegian Cruise Lines',
      quote: 'As a recent college graduate, Purple Unicorn was instrumental in helping me land my role at Chewy. Their interview prep, insider market knowledge, and negotiation advice secured me a 25% increase in total comp.',
    },
    {
      name: 'Samantha Klein',
      role: 'Interim CEO, JCC of the Palm Beaches',
      quote: 'Jenni and her team have been doing some recruiting for us and they are phenomenal! I haven\'t had much luck with recruiting firms in the past but in less than a month she filled my HR Director role that I had been looking to fill for the last 6 months. She also just found us a new Teen Director (or soon to be) and I\'m just extremely impressed with the quality of candidates she has found as well as her follow up and attentiveness. She is going to be in your area this week and asked me to introduce the two of you. I know we don\'t know each other all that well but certainly love to help a fellow exec if I can. If you are looking to fill ANY positions, Jenni is your girl—I highly recommend at least meeting with her to see how she can help you and your team. I\'m so glad that we did!',
    },
    {
      name: 'Darrell C.',
      role: 'Director, Digital Audits, Google',
      quote: 'Their guidance and strategic prep were exceptional. From branding and resume building to offer negotiations and post-hire support, they made all the difference.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-4">
            What Our Partners Are Saying
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: { name: string; role: string; quote: string } }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 200;
  const needsTruncation = testimonial.quote.length > characterLimit;

  const displayQuote = needsTruncation && !isExpanded
    ? testimonial.quote.slice(0, characterLimit) + '...'
    : testimonial.quote;

  return (
    <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm flex flex-col">
      {/* Quote */}
      <div className="mb-6 flex-grow">
        <svg
          className="w-10 h-10 text-[#4f2170] opacity-30 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-slate-700 text-lg leading-relaxed italic">
          "{displayQuote}"
        </p>
        {needsTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#4f2170] hover:text-[#3d1958] font-semibold text-sm mt-2 transition-colors"
          >
            {isExpanded ? 'View Less' : 'View More'}
          </button>
        )}
      </div>

      {/* Author */}
      <div className="border-t border-slate-200 pt-4">
        <p className="font-bold text-slate-900">{testimonial.name}</p>
        <p className="text-[#4f2170] text-sm">{testimonial.role}</p>
      </div>
    </div>
  );
}
