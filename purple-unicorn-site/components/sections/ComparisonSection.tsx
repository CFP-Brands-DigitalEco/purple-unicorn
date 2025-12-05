import { Container } from '../layout/Container';

export function ComparisonSection() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-4">
            What Sets Purple Unicorn Apart?
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Compare our unique and immersive partnership model with traditional career support services.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm border border-slate-200">
            <thead>
              <tr className="bg-[#4f2170] text-white">
                <th className="px-6 py-4 text-left font-bold text-base">Capability</th>
                <th className="px-6 py-4 text-left font-bold text-base">Purple Unicorn</th>
                <th className="px-6 py-4 text-left font-bold text-base">Traditional Talent Hunters</th>
                <th className="px-6 py-4 text-left font-bold text-base">Recruiting Firms</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-slate-100">
                <td className="px-6 py-4 font-semibold text-slate-900">Fortune 500 Hiring Experience</td>
                <td className="px-6 py-4 text-green-700 font-semibold">✓ Deep-rooted, multi-industry</td>
                <td className="px-6 py-4 text-slate-600">Varies by background</td>
                <td className="px-6 py-4 text-slate-600">Varies by industry</td>
              </tr>
              <tr className="bg-slate-50 border-b border-slate-100">
                <td className="px-6 py-4 font-semibold text-slate-900">Executive Search + Career Strategy</td>
                <td className="px-6 py-4 text-green-700 font-semibold">✓ Integrated Offering</td>
                <td className="px-6 py-4 text-orange-600">✕ Coaching only</td>
                <td className="px-6 py-4 text-orange-600">✕ Client-focused</td>
              </tr>
              <tr className="bg-white border-b border-slate-100">
                <td className="px-6 py-4 font-semibold text-slate-900">Talent Branding & Positioning</td>
                <td className="px-6 py-4 text-green-700 font-semibold">✓ Personal + Employer Brand</td>
                <td className="px-6 py-4 text-slate-600">Resume-focused</td>
                <td className="px-6 py-4 text-slate-600">Employer-centric</td>
              </tr>
              <tr className="bg-slate-50 border-b border-slate-100">
                <td className="px-6 py-4 font-semibold text-slate-900">Strategic Role Matching</td>
                <td className="px-6 py-4 text-green-700 font-semibold">✓ Candidate-aligned, growth-minded</td>
                <td className="px-6 py-4 text-slate-600">Guidance only</td>
                <td className="px-6 py-4 text-slate-600">Client-first</td>
              </tr>
              <tr className="bg-white border-b border-slate-100">
                <td className="px-6 py-4 font-semibold text-slate-900">Goal Focused Dedicated 1:1 Partnerships</td>
                <td className="px-6 py-4 text-green-700 font-semibold">✓ High-touch, embedded</td>
                <td className="px-6 py-4 text-slate-600">Defined timelines</td>
                <td className="px-6 py-4 text-orange-600">✕ Rare</td>
              </tr>
              <tr className="bg-slate-50 border-b border-slate-100">
                <td className="px-6 py-4 font-semibold text-slate-900">Full Lifecycle Talent Expertise</td>
                <td className="px-6 py-4 text-green-700 font-semibold">✓ Career to Culture Systems</td>
                <td className="px-6 py-4 text-orange-600">✕ Career-only</td>
                <td className="px-6 py-4 text-slate-600">Hiring-focused</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 font-semibold text-slate-900">Market Intelligence</td>
                <td className="px-6 py-4 text-green-700 font-semibold">✓ Former decision-makers</td>
                <td className="px-6 py-4 text-slate-600">External viewpoint</td>
                <td className="px-6 py-4 text-slate-600">Employer lens only</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Fortune 500 Hiring Experience</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Purple Unicorn:</span>
                <span className="text-sm text-green-700 font-semibold text-right">✓ Deep-rooted, multi-industry</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Traditional:</span>
                <span className="text-sm text-gray-600 text-right">Varies by background</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Recruiting Firms:</span>
                <span className="text-sm text-gray-600 text-right">Varies by industry</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Executive Search + Career Strategy</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Purple Unicorn:</span>
                <span className="text-sm text-green-700 font-semibold text-right">✓ Integrated Offering</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Traditional:</span>
                <span className="text-sm text-orange-600 text-right">✕ Coaching only</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Recruiting Firms:</span>
                <span className="text-sm text-orange-600 text-right">✕ Client-focused</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Talent Branding & Positioning</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Purple Unicorn:</span>
                <span className="text-sm text-green-700 font-semibold text-right">✓ Personal + Employer Brand</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Traditional:</span>
                <span className="text-sm text-gray-600 text-right">Resume-focused</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Recruiting Firms:</span>
                <span className="text-sm text-gray-600 text-right">Employer-centric</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Strategic Role Matching</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Purple Unicorn:</span>
                <span className="text-sm text-green-700 font-semibold text-right">✓ Candidate-aligned, growth-minded</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Traditional:</span>
                <span className="text-sm text-gray-600 text-right">Guidance only</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Recruiting Firms:</span>
                <span className="text-sm text-gray-600 text-right">Client-first</span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Goal Focused Dedicated 1:1 Partnerships</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Purple Unicorn:</span>
                <span className="text-sm text-green-700 font-semibold text-right">✓ High-touch, embedded</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Traditional:</span>
                <span className="text-sm text-gray-600 text-right">Defined timelines</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Recruiting Firms:</span>
                <span className="text-sm text-orange-600 text-right">✕ Rare</span>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Full Lifecycle Talent Expertise</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Purple Unicorn:</span>
                <span className="text-sm text-green-700 font-semibold text-right">✓ Career to Culture Systems</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Traditional:</span>
                <span className="text-sm text-orange-600 text-right">✕ Career-only</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Recruiting Firms:</span>
                <span className="text-sm text-gray-600 text-right">Hiring-focused</span>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Market Intelligence</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Purple Unicorn:</span>
                <span className="text-sm text-green-700 font-semibold text-right">✓ Former decision-makers</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Traditional:</span>
                <span className="text-sm text-gray-600 text-right">External viewpoint</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-gray-600">Recruiting Firms:</span>
                <span className="text-sm text-gray-600 text-right">Employer lens only</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
