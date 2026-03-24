import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Registration Received | Career Kickstart — Purple Unicorn',
  description: 'Thank you for signing up for the Career Kickstart session.',
  robots: { index: false },
};

export default function CareerKickstartSuccessPage() {
  return (
    <div className="bg-[#f5f5f7] min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-10">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#4f2170] mb-4">
            You&rsquo;re registered!
          </h1>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            Your spot for the <strong>Career Kickstart</strong> on{' '}
            <strong>Tuesday, March 31, 2026</strong> has been reserved.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            You will receive a confirmation email shortly with session details. If you
            have any questions in the meantime, reach us at{' '}
            <a
              href="mailto:info@purpluni.com"
              className="text-[#4f2170] font-semibold hover:text-[#6b2f96]"
            >
              info@purpluni.com
            </a>
            .
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8 text-left space-y-2">
            <p className="text-slate-700 text-sm">
              <strong className="text-slate-900">What to bring:</strong> A laptop with
              internet access and a draft resume (rough is fine).
            </p>
            <p className="text-slate-700 text-sm">
              <strong className="text-slate-900">Duration:</strong> Approximately 90 minutes,
              including live Q&amp;A.
            </p>
            <p className="text-slate-700 text-sm">
              <strong className="text-slate-900">Format:</strong> Live online via Zoom.
            </p>
          </div>
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
