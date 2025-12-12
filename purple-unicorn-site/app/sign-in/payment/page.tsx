import Script from 'next/script';
import { Container } from '@/components/layout/Container';

export default function PaymentLoginPage() {
  return (
    <>
      {/* Load Payra Client Portal Script */}
      <Script
        src="https://app.payra.com/client_portal.js"
        strategy="beforeInteractive"
      />
      <Script id="payra-init" strategy="afterInteractive">
        {`window.clientPortal.init('7UJ6X');`}
      </Script>

      <div className="min-h-screen bg-[#f5f5f7] py-12">
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-4">
                Payment Portal
              </h1>
              <p className="text-xl text-slate-700">
                Access your payment information and invoices
              </p>
            </div>

            {/* Payment Portal Button */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 text-center">
              <p className="text-slate-700 mb-6">
                Click the button below to access the secure payment portal
              </p>
              <button className="show-client-portal px-8 py-4 bg-[#4f2170] text-white font-bold text-lg rounded-lg hover:bg-[#6b2f96] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer">
                Open Secure Login
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
