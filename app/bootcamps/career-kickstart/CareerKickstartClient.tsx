'use client';

import { useState, useRef } from 'react';

// Once the $99 Career Kickstart Payra payment link is ready, add to Vercel env vars:
//   NEXT_PUBLIC_CAREER_KICKSTART_PAYRA_URL = https://app.payra.com/YOUR_NEW_LINK
// Until then, falls back to a confirmation page (safe for testing without payment).
const PAYRA_URL =
  process.env.NEXT_PUBLIC_CAREER_KICKSTART_PAYRA_URL ?? '/bootcamps/career-kickstart/success';

const SESSION_DATE = 'Tuesday, March 31, 2026';

interface FormData {
  name: string;
  email: string;
  school: string;
  gradYear: string;
}

const faqs = [
  {
    q: 'Who is this session for?',
    a: 'Students applying for internships or full-time roles within the next 12 months.',
  },
  {
    q: 'Do I need a resume?',
    a: 'Yes. Bring a draft even if it is rough so you can start incorporating notes right away.',
  },
  {
    q: 'How long is the session?',
    a: 'Approximately 90 minutes, including Q&A.',
  },
  {
    q: 'Will there be a recording?',
    a: 'No. This is a live interactive session. Keeping it live ensures you can ask questions and get real-time feedback.',
  },
  {
    q: 'What do I need to attend?',
    a: 'A laptop with internet access. It is also helpful to have a draft resume and an existing or new LinkedIn account.',
  },
];

export function CareerKickstartClient() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    school: '',
    gradYear: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/bootcamp-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, bootcamp: 'career-kickstart' }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      window.location.href = PAYRA_URL;
    } catch {
      setSubmitError(
        'Something went wrong. Please try again or email us at info@purpluni.com'
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f5f5f7]">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#4f2170] to-[#6b2f96] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">

            {/* Left column: copy (3/5) */}
            <div className="lg:col-span-3">
              <p className="text-purple-200 text-sm font-semibold uppercase tracking-widest mb-4">
                Live Online Workshop · $99
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                How to Stand Out and Land an Internship and Full-Time Role
              </h1>
              <p className="text-purple-100 text-lg leading-relaxed mb-4">
                A live 90-minute workshop where students learn how to improve their
                resume, strengthen their LinkedIn profile, reach out to alumni, and
                tell their story in interviews. We also cover career exploration,
                networking, and how to best position yourself in the job market.
              </p>
              <p className="text-purple-200 italic mb-8">
                For students applying to internships and full-time roles who want — and need — a clear strategy.
              </p>

              {/* Credibility bullets */}
              <ul className="space-y-2 mb-8">
                {[
                  'Career coaching framework used with students across multiple universities',
                  'Built by executive recruiters and career coaches',
                  'Practical tools students can apply immediately',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-purple-100 text-sm">
                    <span className="text-purple-300 shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-white text-[#4f2170] font-bold text-lg rounded-lg hover:bg-purple-50 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Reserve My Seat for Career Kickstart
                </button>
                <span className="text-4xl font-bold text-white">$99</span>
              </div>

              {/* Reassurance + scarcity */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-purple-200 text-sm">
                <span>📅 Live online session</span>
                <span>⏱ 90 minutes</span>
                <span>✅ Refund guarantee</span>
              </div>
              <p className="mt-2 text-purple-300 text-sm font-semibold">
                ⚡ Limited seats to allow live Q&amp;A
              </p>
              {SESSION_DATE && (
                <p className="mt-2 text-purple-200 text-sm">{SESSION_DATE}</p>
              )}
            </div>

            {/* Right column: visual placeholder (2/5) */}
            <div className="hidden lg:flex lg:col-span-2 mt-10 lg:mt-0">
              <div className="w-full aspect-[3/4] rounded-xl bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-3 text-purple-200 px-8 text-center">
                <div className="text-5xl">🎓</div>
                <p className="text-sm font-medium">Workshop photo coming soon</p>
                <p className="text-xs text-purple-300">
                  Replace this with a photo of Eric leading a live session or a Zoom screenshot.
                  Drop the image at <code className="text-purple-400">/public/images/career-kickstart-hero.webp</code> and update this component.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl text-slate-700 italic leading-relaxed">
            &ldquo;I received a call from the HR recruiter at Universal informing me
            that I was given an offer for the Entertainment Operations internship.
            I am so grateful for the resources and assistance that you provided me
            with — they really helped me be the best version of myself in the
            interview.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-[#4f2170]">
            J. Levin — Entertainment Operations Intern, Universal
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">

        {/* WHO THIS IS FOR */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-6">
            This Career Kickstart Session Is For
          </h2>
          <ul className="space-y-4">
            {[
              'Students applying for internships in the next 12 months',
              'Students who want a clear strategy instead of guessing',
              'Students who are sending applications but hearing nothing back',
              'Students who want practical tools for resumes and LinkedIn',
              'Students who want to feel confident during interviews',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl shrink-0 mt-0.5">•</span>
                <span className="text-slate-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-[#4f2170] text-white font-bold text-lg rounded-lg hover:bg-[#6b2f96] transition-all duration-200"
            >
              Reserve My Seat — $99
            </button>
          </div>
        </section>

        {/* WHAT YOU'LL LEAVE WITH */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-1">
            What You Will Leave With
          </h2>
          <p className="text-slate-500 text-sm uppercase tracking-wide font-semibold mb-6">
            Virtual · 90 Minutes
          </p>
          <ul className="space-y-4">
            {[
              'LinkedIn strategy and profile optimization',
              'Elevator pitch essentials',
              'Personal brand basics',
              'Resume improvement framework',
              'Alumni outreach strategy',
              'Interview storytelling foundation',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl shrink-0 mt-0.5">✓</span>
                <span className="text-slate-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* WHY STUDENTS STRUGGLE */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-4">
            Why Most Students Struggle to Land an Internship
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            Many students apply to dozens of internships and jobs without hearing back.
            The difference is not effort. The difference is strategy.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            This 90-minute high-impact session shows students how recruiters evaluate
            candidates and how to stand out early.
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <blockquote className="text-slate-700 italic text-base leading-relaxed">
              &ldquo;After graduating from FSU in 2022, I had no idea what I wanted to do.
              Purple Unicorn Career Coaching is the reason I can proudly say I successfully
              entered the corporate world and have been thriving. The guidance gave me the
              confidence and tools I needed to succeed.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm font-semibold text-[#4f2170]">
              Julia B. — FSU Graduate, Class of 2022
            </p>
          </div>
        </section>

        {/* MEET YOUR INSTRUCTORS */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-8">
            Meet Your Instructors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Eric Miller */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              {/*
                TODO: Add Eric Miller's headshot.
                Drop the file at /public/headshots/eric-miller.webp, then replace the
                placeholder div below with:
                  <Image
                    src="/headshots/eric-miller.webp"
                    alt="Eric Miller"
                    width={96}
                    height={96}
                    className="rounded-full object-cover mb-4"
                  />
              */}
              <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-4 shrink-0">
                <span className="text-2xl font-bold text-[#4f2170]">EM</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Eric Miller</h3>
              <p className="text-[#4f2170] text-sm font-semibold mb-3">Career Coach</p>
              <p className="text-slate-700 leading-relaxed">
                Eric Miller is a career coach who helps students translate their strengths
                into internship offers. His approach focuses on clarity, practical tools,
                and structured preparation so students can stand out with their resume,
                LinkedIn profile, and interview story. Students leave his sessions with
                materials they can apply immediately.
              </p>
            </div>

            {/* Suzanne Rosenthal */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              {/*
                TODO: Add Suzanne Rosenthal's headshot.
                Drop the file at /public/headshots/suzanne-rosenthal.webp, then replace
                the placeholder div below with:
                  <Image
                    src="/headshots/suzanne-rosenthal.webp"
                    alt="Suzanne Rosenthal"
                    width={96}
                    height={96}
                    className="rounded-full object-cover mb-4"
                  />
              */}
              <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-4 shrink-0">
                <span className="text-2xl font-bold text-[#4f2170]">SR</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Suzanne Rosenthal</h3>
              <p className="text-[#4f2170] text-sm font-semibold mb-3">Talent Leader & Career Coach</p>
              <p className="text-slate-700 leading-relaxed">
                Suzanne Rosenthal is a seasoned talent leader who has spent her career
                opening doors for early-career talent and helping students launch meaningful
                careers. With 25+ years in media, she has led emerging talent programs,
                built pathways for students, and partnered with colleges and national
                nonprofits to expand access to internships and full-time roles.
              </p>
            </div>

          </div>
        </section>

        {/* SATISFACTION GUARANTEE */}
        <section className="bg-green-50 rounded-xl border border-green-200 p-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl shrink-0">🛡️</span>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                Satisfaction Guarantee
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                Attend the live session. If you do not find it valuable, email us within
                24 hours for a full refund of the $99 fee. No hassle.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <span className="text-[#4f2170] font-bold text-xl shrink-0 leading-none">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FOUNDER NOTE */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-4">
            Why We Created This
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg mb-4">
            Many students believe applying for internships or entry-level roles is a numbers
            game. Apply enough times and something will eventually work.
          </p>
          <p className="text-slate-700 leading-relaxed text-lg">
            In reality, most students are never shown how recruiters evaluate candidates or
            how to communicate their strengths clearly. Our college and early-career coaching
            programs were created to give individuals the strategy and tools they need — so
            they stop guessing and start standing out.
          </p>
        </section>

        {/* ── REGISTRATION FORM ──────────────────────────────────────────── */}
        <section
          ref={formRef}
          id="register"
          className="bg-gradient-to-br from-[#4f2170] to-[#6b2f96] rounded-xl p-8 scroll-mt-24"
        >
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Ready to Stand Out for Internships?
            </h2>
            <p className="text-purple-200 text-center mb-2">
              Live online · 90 minutes · Limited seats
            </p>
            <p className="text-white text-center text-4xl font-bold mb-8">$99</p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-purple-100 text-sm font-semibold mb-1">
                  Full Name <span className="text-purple-300">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-purple-400 rounded-lg bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-colors"
                />
              </div>

              <div>
                <label className="block text-purple-100 text-sm font-semibold mb-1">
                  Email Address <span className="text-purple-300">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-purple-400 rounded-lg bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-colors"
                />
              </div>

              <div>
                <label className="block text-purple-100 text-sm font-semibold mb-1">
                  School{' '}
                  <span className="text-purple-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="University or college name"
                  className="w-full px-4 py-3 border border-purple-400 rounded-lg bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-colors"
                />
              </div>

              <div>
                <label className="block text-purple-100 text-sm font-semibold mb-1">
                  Graduation Year{' '}
                  <span className="text-purple-400 font-normal">(optional)</span>
                </label>
                <select
                  name="gradYear"
                  value={formData.gradYear}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-purple-400 rounded-lg bg-[#4f2170] text-white focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                >
                  <option value="">Select graduation year</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>

              {submitError && (
                <p className="text-red-300 text-sm bg-red-900/30 rounded-lg px-4 py-3">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-[#4f2170] font-bold text-lg rounded-lg hover:bg-purple-50 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2 shadow-lg"
              >
                {isSubmitting ? 'Saving your spot...' : 'Reserve My Seat — $99'}
              </button>

              <p className="text-purple-300 text-xs text-center">
                You will be redirected to our secure payment page to complete your $99 registration.
              </p>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}
