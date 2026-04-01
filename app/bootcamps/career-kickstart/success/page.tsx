import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'You\'re Registered! | Career Kickstart — Purple Unicorn',
  description: 'Your spot for the Career Kickstart workshop is confirmed.',
  robots: { index: false },
};

export default function CareerKickstartSuccessPage() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-16">

        {/* Main confirmation card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-10 text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#4f2170] mb-3">
            You&rsquo;re registered!
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Your spot for the <strong className="text-slate-800">Career Kickstart Workshop</strong> is confirmed.
          </p>
        </div>

        {/* Session details — the most important block */}
        <div className="bg-[#1a0d2e] rounded-xl p-8 mb-6 text-white">
          <h2 className="text-lg font-bold text-purple-300 uppercase tracking-widest mb-5 text-center">
            Session Details
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-900/60 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-purple-300 text-xs font-semibold uppercase tracking-wider mb-0.5">Date &amp; Time</p>
                <p className="text-white font-semibold text-lg">Tuesday, April 7, 2026</p>
                <p className="text-purple-200 text-sm">Time will be emailed to you by the Purple Unicorn team.</p>
              </div>
            </div>
            <div className="border-t border-white/10" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-900/60 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-purple-300 text-xs font-semibold uppercase tracking-wider mb-0.5">Format</p>
                <p className="text-white font-semibold text-lg">Live Online via Zoom</p>
                <p className="text-purple-200 text-sm">Link will be sent to your email before the session.</p>
              </div>
            </div>
            <div className="border-t border-white/10" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-900/60 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-purple-300 text-xs font-semibold uppercase tracking-wider mb-0.5">Duration</p>
                <p className="text-white font-semibold text-lg">90 Minutes</p>
                <p className="text-purple-200 text-sm">Live, interactive — no recording will be available.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What to bring */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
          <h2 className="text-xl font-bold text-[#4f2170] mb-4">What to Have Ready</h2>
          <ul className="space-y-3">
            {[
              'A laptop with a stable internet connection',
              'A draft resume — rough is totally fine',
              'Your LinkedIn profile open (or create one beforehand)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#4f2170]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <div>
              <p className="font-semibold text-amber-800 mb-1">Add this to your calendar now</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                We won&rsquo;t send reminder emails. Mark April 7th on your calendar today so you don&rsquo;t miss your spot. This is a live session — there is no recording.
              </p>
            </div>
          </div>
        </div>

        {/* Questions */}
        <p className="text-center text-slate-500 text-sm mb-8">
          Questions? Email us at{' '}
          <a href="mailto:info@purpluni.com" className="text-[#4f2170] font-semibold hover:text-[#6b2f96]">
            info@purpluni.com
          </a>
        </p>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#4f2170] text-white font-semibold rounded-lg hover:bg-[#6b2f96] transition-colors"
          >
            Back to Purple Unicorn
          </Link>
        </div>

      </div>
    </div>
  );
}
