'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import {
  testimonials,
  CareerStageFilter,
  ServiceTypeFilter,
  careerStageLabels,
  serviceTypeLabels,
  mapCareerStageToTags,
  mapServiceTypeToTags,
} from '@/lib/testimonials';

export function TestimonialsClient() {
  const [selectedCareerStage, setSelectedCareerStage] = useState<CareerStageFilter | null>(null);
  const [selectedServiceType, setSelectedServiceType] = useState<ServiceTypeFilter | null>(null);

  // Toggle filter selection (single-select per group)
  const toggleCareerStage = (stage: CareerStageFilter) => {
    setSelectedCareerStage(prev => prev === stage ? null : stage);
  };

  const toggleServiceType = (service: ServiceTypeFilter) => {
    setSelectedServiceType(prev => prev === service ? null : service);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCareerStage(null);
    setSelectedServiceType(null);
  };

  // Filter testimonials based on selected filters (AND logic between groups)
  const filteredTestimonials = useMemo(() => {
    let results = testimonials;

    // Apply career stage filter
    if (selectedCareerStage) {
      const stageTags = mapCareerStageToTags(selectedCareerStage);
      results = results.filter(testimonial =>
        testimonial.tags.some(tag => stageTags.includes(tag))
      );
    }

    // Apply service type filter (AND with career stage)
    if (selectedServiceType) {
      const serviceTags = mapServiceTypeToTags(selectedServiceType);
      results = results.filter(testimonial =>
        testimonial.tags.some(tag => serviceTags.includes(tag))
      );
    }

    return results;
  }, [selectedCareerStage, selectedServiceType]);

  // Separate featured and regular testimonials
  const featuredTestimonials = useMemo(() => {
    if (selectedCareerStage || selectedServiceType) {
      // When filtering, don't show featured section separately
      return [];
    }
    return filteredTestimonials.filter(t => t.featured);
  }, [filteredTestimonials, selectedCareerStage, selectedServiceType]);

  const regularTestimonials = useMemo(() => {
    if (selectedCareerStage || selectedServiceType) {
      // When filtering, show all results together
      return filteredTestimonials;
    }
    return filteredTestimonials.filter(t => !t.featured);
  }, [filteredTestimonials, selectedCareerStage, selectedServiceType]);

  // Count active filters
  const activeFilterCount = (selectedCareerStage ? 1 : 0) + (selectedServiceType ? 1 : 0);

  return (
    <div className="bg-white min-h-screen">
      {/* Simple Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Client Success Stories
            </h1>
            <p className="text-lg text-slate-600">
              Filter testimonials by career stage and service type to find stories most relevant to you
            </p>
          </div>
        </Container>
      </div>

      {/* Two-Group Filter Section */}
      <div className="bg-white border-b border-slate-200 py-8">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Career Stage Group */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Career Stage
              </label>
              <div className="flex flex-wrap gap-3">
                {(Object.keys(careerStageLabels) as CareerStageFilter[]).map((stage) => (
                  <button
                    key={stage}
                    onClick={() => toggleCareerStage(stage)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCareerStage === stage
                        ? 'bg-[#4f2170] text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {careerStageLabels[stage]}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Type Group */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Service Type
              </label>
              <div className="flex flex-wrap gap-3">
                {(Object.keys(serviceTypeLabels) as ServiceTypeFilter[]).map((service) => (
                  <button
                    key={service}
                    onClick={() => toggleServiceType(service)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedServiceType === service
                        ? 'bg-[#4f2170] text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {serviceTypeLabels[service]}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Showing {filteredTestimonials.length} testimonial{filteredTestimonials.length !== 1 ? 's' : ''}
                {activeFilterCount > 0 && (
                  <span className="ml-1">
                    matching {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''}
                  </span>
                )}
              </p>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-semibold text-[#4f2170] hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Featured Testimonials Section */}
      {featuredTestimonials.length > 0 && (
        <div className="py-12 bg-slate-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTestimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    showTags={false}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* All Testimonials Grid */}
      {regularTestimonials.length > 0 && (
        <div className="py-12">
          <Container>
            <div className="max-w-6xl mx-auto">
              {!selectedCareerStage && !selectedServiceType && featuredTestimonials.length > 0 && (
                <h2 className="text-2xl font-bold text-slate-900 mb-8">More Success Stories</h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularTestimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    showTags={activeFilterCount > 0}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Empty state */}
      {filteredTestimonials.length === 0 && (
        <div className="py-16">
          <Container>
            <div className="text-center">
              <div className="text-slate-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                No testimonials found
              </h3>
              <p className="text-slate-600 mb-6">
                Try adjusting your filters to see more testimonials.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-[#4f2170] text-white rounded-lg hover:bg-[#3d1958] transition-colors font-medium"
              >
                Clear all filters
              </button>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
