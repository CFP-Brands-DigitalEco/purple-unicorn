'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { JobCard } from '@/components/jobs/JobCard';
import { mockJobs } from '@/lib/mockJobs';

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  // Get unique locations and types for filters
  const locations = useMemo(() => {
    const uniqueLocations = Array.from(new Set(mockJobs.map(job => job.location))).sort();
    return uniqueLocations;
  }, []);

  const jobTypes = useMemo(() => {
    const uniqueTypes = Array.from(new Set(mockJobs.map(job => job.type))).sort();
    return uniqueTypes;
  }, []);

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation = !locationFilter || job.location === locationFilter;
      const matchesType = !typeFilter || job.type === typeFilter;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchQuery, locationFilter, typeFilter]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setLocationFilter('');
    setTypeFilter('');
  };

  return (
    <div className="bg-[#f5f5f7] min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4f2170] to-[#6b2f96] text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HOT JOBS!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Find Your Dream Career With Purple Unicorn
            </p>
            <p className="text-lg text-purple-200">
              Discover exceptional opportunities with our curated selection of premium positions
            </p>
          </div>
        </Container>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-white border-b border-slate-200 py-8">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by job title, company, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 pl-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-700 placeholder-slate-400"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Location Filter */}
              <div className="flex-1">
                <label htmlFor="location" className="block text-sm font-semibold text-slate-700 mb-2">
                  Location
                </label>
                <select
                  id="location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-700"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="flex-1">
                <label htmlFor="type" className="block text-sm font-semibold text-slate-700 mb-2">
                  Job Type
                </label>
                <select
                  id="type"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-700"
                >
                  <option value="">All Types</option>
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters Button */}
              {(searchQuery || locationFilter || typeFilter) && (
                <div className="flex-shrink-0 md:pt-7">
                  <button
                    onClick={handleClearFilters}
                    className="w-full md:w-auto px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mt-6 text-slate-600">
              <p className="font-semibold">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Jobs Grid */}
      <div className="py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 mx-auto text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No jobs found</h3>
                <p className="text-slate-500 mb-6">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-3 bg-[#4f2170] text-white font-semibold rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
