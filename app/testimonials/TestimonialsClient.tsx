import { Container } from '@/components/layout/Container';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { testimonials } from '@/lib/testimonials';

export function TestimonialsClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Client Success Stories
            </h1>
            <p className="text-lg text-slate-600">
              Hear from our clients about their experiences working with Purple Unicorn
            </p>
          </div>
        </Container>
      </div>

      {/* Testimonials Grid */}
      <div className="py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
