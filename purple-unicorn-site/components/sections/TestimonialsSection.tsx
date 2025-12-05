import { Container } from '../layout/Container';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'VP of HR, Global Manufacturing Firm',
      quote: 'Purple Unicorn transformed our talent strategy. We filled critical roles faster and with better long-term fit than ever before.',
    },
    {
      name: 'Michael Reyes',
      role: 'Director of Talent Acquisition, SaaS Company',
      quote: 'Their insights into culture alignment and hiring workflows have fundamentally changed how we build teams.',
    },
    {
      name: 'Lauren Mitchell',
      role: 'Senior Talent Partner, Healthcare Network',
      quote: 'The level of partnership, communication, and strategic guidance Purple Unicorn provides is unmatched.',
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
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-[#4f2170] opacity-30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-[#4f2170] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
