import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export default function BootcampPaymentPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/bootcamps/college-coaching-bootcamp"
            className="inline-flex items-center gap-2 text-[#4f2170] hover:text-[#6b2f96] font-semibold mb-8 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Bootcamp Details
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-4">
              Complete Your Payment
            </h1>
            <p className="text-xl text-slate-700">
              Secure your spot in the Career Kickstart session
            </p>
          </div>

          {/* Payment Iframe */}
          <div className="flex justify-center">
            <iframe
              src="https://app.payra.com/7UJ6XPTKXWKR/paymentLink?embed=true"
              title="Payment Portal"
              width="600"
              height="600"
              style={{
                boxShadow: '0px 0px 8px 5px #999',
                borderRadius: '.25em',
                border: 'none'
              }}
            />
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-lg shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-[#4f2170] mb-4">
              What Happens Next?
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl shrink-0">1.</span>
                <span>Complete your payment using the secure form above</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl shrink-0">2.</span>
                <span>You'll receive a confirmation email with your session details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl shrink-0">3.</span>
                <span>Access information and materials will be sent 24 hours before your session</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl shrink-0">4.</span>
                <span>Join your live session and start building your career toolkit!</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="mt-8 text-center">
            <p className="text-slate-600">
              Questions? Contact us at{' '}
              <a
                href="mailto:info@collegecoachingbootcamp.com"
                className="text-[#4f2170] font-semibold hover:text-[#6b2f96] transition-colors"
              >
                info@collegecoachingbootcamp.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
