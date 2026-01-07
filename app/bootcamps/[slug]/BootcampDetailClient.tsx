'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export function BootcampDetailClient() {
  const [showFormA, setShowFormA] = useState(false);
  const [showFormB, setShowFormB] = useState(false);
  const router = useRouter();

  const handleFormASubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Navigate to payment page
    router.push('/bootcamps/payment');
  };

  const handleFormBSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Close modal and show success message (you can add a toast/alert here)
    setShowFormB(false);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="bg-[#f5f5f7] min-h-screen">
      {/* HERO SECTION */}
      <div className="bg-white border-b border-slate-200 py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/bootcamps"
              className="inline-flex items-center gap-2 text-[#4f2170] hover:text-[#6b2f96] font-semibold mb-8 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Bootcamps
            </Link>

            {/* Hero Content */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-6">
              Discover Your Direction. Claim Your Future.
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Build clarity, confidence, and career momentum with a proven, high-impact experience designed for students, campus groups, and employers.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowFormA(true)}
                className="px-8 py-4 bg-[#4f2170] text-white font-bold text-lg rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 shadow-md hover:shadow-lg text-center cursor-pointer"
              >
                Sign Up for Upcoming Career Kickstart Sessions
              </button>
              <button
                onClick={() => setShowFormB(true)}
                className="px-8 py-4 border-2 border-[#4f2170] text-[#4f2170] font-bold text-lg rounded-lg hover:bg-[#4f2170] hover:text-white transition-colors duration-200 text-center cursor-pointer"
              >
                Join the Bootcamp Interest List
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* MAIN CONTENT */}
      <div className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">

            {/* SECTION 1: 4-Week Bootcamp */}
            <section id="bootcamp-4-week" className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-[#4f2170] mb-6">
                College Coaching Bootcamp — 4 Week Experience
              </h2>

              {/* Meta Row */}
              <div className="mb-6 space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-[#4f2170]">Format:</span>
                  <span>Four 1-hour interactive group sessions + one 90-minute hands-on workshop</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-[#4f2170]">Delivery:</span>
                  <span>Virtual | Up to 15 participants</span>
                </div>
              </div>

              {/* Ideal For */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Ideal for:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                    <span className="text-slate-700">Individual students ready to invest in their own career journey</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                    <span className="text-slate-700">Small peer groups who want to learn together</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                    <span className="text-slate-700">Campus organizations or employers seeking to support early-career talent</span>
                  </li>
                </ul>
              </div>

              {/* Focus Areas */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Focus Areas:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">Career exploration & values discovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">Personal branding and résumé strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">LinkedIn optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">Interview preparation & strategic storytelling</span>
                  </li>
                </ul>
              </div>

              {/* Outcome */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Outcome:</h3>
                <p className="text-slate-700 leading-relaxed">
                  Learn, practice, and apply — graduate with a career toolkit you'll use for life and the confidence to stand out in internships, job searches, and beyond.
                </p>
              </div>

              {/* Availability */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-[#4f2170] mb-2">Availability:</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Sessions launching soon! Be the first to know — sign up below to receive early alerts when registration opens.
                </p>
                <button
                  onClick={() => setShowFormB(true)}
                  className="text-[#4f2170] font-semibold hover:text-[#6b2f96] transition-colors cursor-pointer"
                >
                  Sign Up for Updates →
                </button>
              </div>
            </section>

            {/* SECTION 2: 2-Week Accelerated */}
            <section id="bootcamp-2-week" className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-[#4f2170] mb-6">
                College Coaching Bootcamp — 2 Week Accelerated
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Same content as the 4-week version — 5.5 hours of interactive group coaching, condensed into two weeks.
              </p>

              {/* Best For */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Best For:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                    <span className="text-slate-700">Students seeking an intensive, fast-paced experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                    <span className="text-slate-700">Anyone maximizing career readiness during breaks or short timeframes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                    <span className="text-slate-700">Groups who want a concentrated program for their members</span>
                  </li>
                </ul>
              </div>

              {/* Outcome */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Outcome:</h3>
                <p className="text-slate-700 leading-relaxed">
                  Gain clarity, confidence, and a practical career toolkit in half the time — perfect for students eager to accelerate their growth and stand out quickly.
                </p>
              </div>

              {/* Availability */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-[#4f2170] mb-2">Availability:</h3>
                <p className="text-slate-700 leading-relaxed">
                  Be the first to know — sign up below for early access.
                </p>
                <button
                  onClick={() => setShowFormB(true)}
                  className="text-[#4f2170] font-semibold hover:text-[#6b2f96] transition-colors cursor-pointer mt-2"
                >
                  Sign Up for Updates →
                </button>
              </div>
            </section>

            {/* SECTION 3: Career Kickstart */}
            <section id="career-kickstart" className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-[#4f2170] mb-6">
                Career Kickstart — 60–90 Minute Training
              </h2>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Format:</h3>
                <p className="text-slate-700">Virtual or in-person facilitation (when possible).</p>
              </div>

              {/* Ideal For */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Ideal for:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                    <span className="text-slate-700">Individual students looking for a quick boost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                    <span className="text-slate-700">Clubs, campus organizations, Greek life chapters, athletic teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                    <span className="text-slate-700">Employers seeking short, high-impact training for interns or early-career hires</span>
                  </li>
                </ul>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Content:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">LinkedIn strategy and profile optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">Elevator pitch essentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">Personal brand basics</span>
                  </li>
                </ul>
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Upcoming Sessions (EST):</h3>
                <div className="text-center py-4">
                  <p className="text-slate-600 text-lg">
                    New dates coming soon! Check back for updates.
                  </p>
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  $199 (Winter Break Special: $149 — save $50)
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowFormA(true)}
                className="px-8 py-4 bg-[#4f2170] text-white font-bold text-lg rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Sign Up
              </button>
            </section>

            {/* SECTION 4: Your Career Blueprint */}
            <section id="career-blueprint" className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-[#4f2170] mb-6">
                Your Career Blueprint — 1:1 Sessions (8 Weeks)
              </h2>

              {/* Focus Areas */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Focus Areas:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">Career exploration & readiness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">Résumé building & LinkedIn branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">Application strategy & interview preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl shrink-0">✓</span>
                    <span className="text-slate-700">Networking skills & strategic storytelling</span>
                  </li>
                </ul>
              </div>

              {/* Outcome */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Outcome:</h3>
                <p className="text-slate-700 leading-relaxed">
                  Gain clarity on your next steps, build confidence in your professional identity, and learn how to stand out in internships, job searches, or graduate applications.
                </p>
              </div>

              {/* Next Step */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-[#4f2170] mb-2">Next Step:</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Learn more about our personalized career services and how we can help you succeed.
                </p>
                <Link
                  href="/candidates"
                  className="inline-block px-8 py-4 bg-[#4f2170] text-white font-bold text-lg rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Explore Candidate Services
                </Link>
              </div>
            </section>

            {/* SECTION 5: Group & Organization Options */}
            <section id="group-options" className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-[#4f2170] mb-6">
                Group & Organization Options
              </h2>

              <p className="text-slate-700 leading-relaxed mb-4">
                Contact us to explore group options with special discounted pricing available for:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                  <span className="text-slate-700">Student clubs and campus organizations (Greek life, athletics, cultural groups)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                  <span className="text-slate-700">University departments and career centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4f2170] font-bold text-xl shrink-0">•</span>
                  <span className="text-slate-700">Employers seeking to support interns or early-career talent</span>
                </li>
              </ul>

              <p className="text-slate-700 leading-relaxed mb-6">
                Submit the inquiry form below and a representative will follow up with details on format, pricing, and scheduling.
              </p>

              <button
                onClick={() => setShowFormB(true)}
                className="px-8 py-4 bg-[#4f2170] text-white font-bold text-lg rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Submit Inquiry Form
              </button>
            </section>

          </div>
        </Container>
      </div>

      {/* MODAL: FORM A (Career Kickstart RSVP) */}
      {showFormA && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#4f2170]">
                  RSVP / Sign Up (Career Kickstart)
                </h2>
                <p className="text-sm text-slate-600 mt-1">All times are EST</p>
              </div>
              <button
                onClick={() => setShowFormA(false)}
                className="text-slate-500 hover:text-slate-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleFormASubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Select Session Date & Time <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                >
                  <option value="">Choose a session...</option>
                  <option value="coming-soon">New dates coming soon - contact us to be notified</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Email (please use the email you'll log in with) <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  University/School/Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Year in School (e.g. Junior, Senior, recent graduate) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  How did you hear about us (e.g. organization, ambassador name, social media)? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  What outcomes do you hope to achieve? (optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-5 h-5 text-[#4f2170] border-slate-300 rounded focus:ring-[#4f2170]"
                />
                <label className="text-slate-700">
                  I agree to receive session details and reminders via email. <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#4f2170] text-white font-bold text-lg rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: FORM B (General Inquiry) */}
      {showFormB && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#4f2170]">
                General Inquiry / Interest List
              </h2>
              <button
                onClick={() => setShowFormB(false)}
                className="text-slate-500 hover:text-slate-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleFormBSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Email Address (please use the email you'd like updates sent to) <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  University/School/Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Year in School (e.g. Junior, Senior, Recent Graduate) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  How did you hear about us (e.g. organization, ambassador name, social media, etc.)? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  What outcomes do you hope to achieve? (optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-3">
                  Program(s) of Interest <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-[#4f2170] border-slate-300 rounded focus:ring-[#4f2170]"
                    />
                    <label className="text-slate-700">Career Kickstart: 60–90 minute sessions</label>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-[#4f2170] border-slate-300 rounded focus:ring-[#4f2170]"
                    />
                    <label className="text-slate-700">College Coaching Bootcamp: (4-week or 2-week sessions)</label>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-[#4f2170] border-slate-300 rounded focus:ring-[#4f2170]"
                    />
                    <label className="text-slate-700">Your Career Blueprint: 1:1 Coaching</label>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-[#4f2170] border-slate-300 rounded focus:ring-[#4f2170]"
                    />
                    <label className="text-slate-700">Other (please specify)</label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-3">
                  Session Type <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="session-type"
                      required
                      className="mt-1 w-5 h-5 text-[#4f2170] border-slate-300 focus:ring-[#4f2170]"
                    />
                    <label className="text-slate-700">For myself</label>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="session-type"
                      required
                      className="mt-1 w-5 h-5 text-[#4f2170] border-slate-300 focus:ring-[#4f2170]"
                    />
                    <label className="text-slate-700">Exploring a group option (club, Greek organization, athletic team, campus org)</label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#4f2170] text-white font-bold text-lg rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Submit Interest Form
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
