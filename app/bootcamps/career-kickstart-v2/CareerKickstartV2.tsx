'use client';

import { useState, useRef } from 'react';

const SESSION_DATE = 'Tuesday, April 7, 2026';

interface FormData {
  name: string;
  email: string;
  school: string;
  gradYear: string;
}

const faqs = [
  { q: 'Who is this session for?', a: 'Students applying for internships or full-time roles within the next 12 months.' },
  { q: 'Do I need a resume?', a: 'Yes. Bring a draft even if it is rough so you can start incorporating notes right away.' },
  { q: 'How long is the session?', a: 'Approximately 90 minutes, including Q&A.' },
  { q: 'Will there be a recording?', a: 'No. This is a live interactive session. Keeping it live ensures you can ask questions and get real-time feedback.' },
  { q: 'What do I need to attend?', a: 'A laptop with internet access. It is also helpful to have a draft resume and an existing or new LinkedIn account.' },
];

const outcomes = [
  'LinkedIn strategy & profile optimization',
  'Elevator pitch that gets attention',
  'Personal brand fundamentals',
  'Resume improvement framework',
  'Alumni outreach approach',
  'Interview storytelling method',
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.7 4.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L7 9.58l5.3-5.28a1 1 0 0 1 1.4 0z" />
    </svg>
  );
}

export function CareerKickstartV2() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', school: '', gradYear: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const bottomFormRef = useRef<HTMLElement>(null);

  const scrollToBottomForm = () => bottomFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/bootcamp-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, bootcamp: 'career-kickstart' }),
      });
      if (!res.ok) throw new Error();
      setShowPayment(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us at info@purpluni.com');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f5f5f7]">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-linear-to-br from-[#4f2170] to-[#6b2f96] text-white">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-16">

          <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">

            {/* ── LEFT: value + proof ──────────────────────────────────── */}
            <div className="mb-10 lg:mb-0">

              <p className="text-purple-300 text-xs font-extrabold uppercase tracking-[0.2em] mb-3">
                Career Kickstart Workshop
              </p>

              {/* Session detail pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['📅 April 7th', '⏱ 90 Min', '💻 Live Online', '🎫 Limited Seats'].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center text-purple-300 text-xs font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                The Four Places Most Students Lose the Job Search — and Exactly How to Win Each One.
              </h1>
              <div className="mb-6">
                <p className="text-white text-lg font-semibold mb-2">
                  Resume. LinkedIn. Outreach. Interviews.
                </p>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Learn to sell yourself and give recruiters exactly what they&apos;re looking for — in one focused session.
                </p>
              </div>

              {/* What You Will Walk Away With */}
              <div className="border-t border-white/15 pt-6 mb-8">
                <p className="text-purple-300 text-xs font-extrabold uppercase tracking-widest mb-4">
                  What You Will Walk Away With
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon className="text-green-400 shrink-0 mt-0.5 w-4 h-4" />
                      <span className="text-purple-100 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* ── RIGHT: registration form card ───────────────────────── */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                {showPayment ? (
                  <>
                    <p className="text-[#4f2170] font-bold text-sm uppercase tracking-widest text-center mb-1">
                      Complete Your Registration
                    </p>
                    <p className="text-slate-500 text-sm text-center mb-4">
                      Your spot is saved — complete payment below to lock it in.
                    </p>
                    <iframe
                      src="https://app.payra.com/7UJ6XP42G6A8/paymentLink?embed=true"
                      frameBorder="0"
                      width="100%"
                      height="600"
                      style={{ boxShadow: '0px 0px 8px 5px #999', borderRadius: '.25em' }}
                    />
                  </>
                ) : (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-bold text-[#4f2170] mb-1">Reserve Your Seat</h2>
                      <p className="text-slate-500 text-sm">
                        {SESSION_DATE} · Live Online · 90 Min
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div>
                        <label className="block text-slate-700 text-sm font-semibold mb-1">
                          Full Name <span className="text-[#4f2170]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 text-sm font-semibold mb-1">
                          Email Address <span className="text-[#4f2170]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-600 text-xs font-semibold mb-1">
                            School <span className="text-slate-400 font-normal">(opt)</span>
                          </label>
                          <input
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            placeholder="University"
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-600 text-xs font-semibold mb-1">
                            Grad Year <span className="text-slate-400 font-normal">(opt)</span>
                          </label>
                          <select
                            name="gradYear"
                            value={formData.gradYear}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f2170] focus:border-transparent bg-white transition-colors"
                          >
                            <option value="">Year</option>
                            {['2025', '2026', '2027', '2028', '2029'].map((y) => (
                              <option key={y} value={y}>{y}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {submitError && (
                        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                          {submitError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#6b2f96] text-white font-bold text-lg tracking-wide rounded-xl hover:bg-[#7d38b0] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-purple-900/30 mt-1"
                      >
                        {isSubmitting ? 'Saving your spot...' : 'Reserve My Seat — $99'}
                      </button>

                      <p className="text-slate-600 text-sm text-center">
                        Not valuable? Full refund within 24 hours. No questions asked.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">

        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-6">
            This Session Is For You If:
          </h2>
          <ul className="space-y-4">
            {[
              "You've been sending applications and getting silence",
              "You know your resume isn't great, but you don't know how to fix it",
              "LinkedIn feels like a chore, not a tool that works for you",
              "You want to reach out to alumni and network, but don't know how to start",
              "Interviews make you nervous because you don't have a clear story ready",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#4f2170] font-bold text-xl shrink-0 mt-0.5">•</span>
                <span className="text-slate-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-4">
            Why Most Students Struggle to Land an Internship
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            Most students treat the job search like a numbers game — send enough applications
            and eventually something sticks. It doesn't work that way.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            The difference between students who land internships and those who keep waiting
            is rarely effort. It's almost always strategy. Most students are never shown how
            recruiters actually evaluate candidates or what makes one resume stand out over
            another. This workshop fixes that.
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

        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-4">
            Meet Your Instructors
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">Suzanne brings 25+ years on the hiring and talent side. Eric brings the student coaching framework. Together they cover both sides of the hiring conversation.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              {/*
                TODO: Drop eric-miller.webp into /public/headshots/ and replace the
                placeholder below with:
                  <Image src="/headshots/eric-miller.webp" alt="Eric Miller"
                    width={96} height={96} className="rounded-full object-cover mb-4" />
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
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              {/*
                TODO: Drop suzanne-rosenthal.webp into /public/headshots/ and replace
                the placeholder below with:
                  <Image src="/headshots/suzanne-rosenthal.webp" alt="Suzanne Rosenthal"
                    width={96} height={96} className="rounded-full object-cover mb-4" />
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

        {/* TESTIMONIAL — J. Levin */}
        <section className="bg-purple-50 rounded-xl border border-purple-200 p-8">
          <blockquote className="text-slate-700 italic text-lg leading-relaxed mb-4">
            &ldquo;I received a call from the HR recruiter at Universal informing me I was given an offer
            for the Entertainment Operations internship. I am so grateful for the resources and
            assistance — they really helped me be the best version of myself in the interview.&rdquo;
          </blockquote>
          <p className="text-sm font-semibold text-[#4f2170]">J. Levin — Entertainment Operations Intern, Universal</p>
        </section>

        {/* BOTTOM REGISTRATION FORM */}
        <section
          ref={bottomFormRef}
          id="register"
          className="bg-linear-to-br from-[#4f2170] to-[#6b2f96] rounded-xl p-8 scroll-mt-24"
        >
          <div className="max-w-lg mx-auto">
            {showPayment ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Complete Your Registration</h2>
                <p className="text-purple-300 text-center mb-6">Your spot is saved — complete payment below to lock it in.</p>
                <iframe
                  src="https://app.payra.com/7UJ6XP42G6A8/paymentLink?embed=true"
                  frameBorder="0"
                  width="100%"
                  height="600"
                  style={{ boxShadow: '0px 0px 8px 5px #999', borderRadius: '.25em' }}
                />
              </>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
                  Secure Your Spot for April 7th.
                </h2>
                <p className="text-purple-200 text-center mb-8">
                  {SESSION_DATE} · Live Online · 90 Minutes
                </p>

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
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-purple-100 text-xs font-semibold mb-1">
                        School <span className="text-purple-400 font-normal">(opt)</span>
                      </label>
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        placeholder="University"
                        className="w-full px-3 py-2.5 border border-purple-400 rounded-lg bg-white/10 text-white text-sm placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-100 text-xs font-semibold mb-1">
                        Grad Year <span className="text-purple-400 font-normal">(opt)</span>
                      </label>
                      <select
                        name="gradYear"
                        value={formData.gradYear}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-purple-400 rounded-lg bg-[#4f2170] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                      >
                        <option value="">Year</option>
                        {['2025', '2026', '2027', '2028', '2029'].map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {submitError && (
                    <p className="text-red-300 text-sm bg-red-900/30 rounded-lg px-4 py-3">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-[#4f2170] font-bold text-lg rounded-xl hover:bg-purple-50 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg mt-1"
                  >
                    {isSubmitting ? 'Saving your spot...' : 'Reserve My Seat — $99'}
                  </button>
                  <p className="text-purple-200 text-sm text-center">
                    Not valuable? Full refund within 24 hours. No questions asked.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>

        {/* FAQ — last */}
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

      </div>
    </div>
  );
}
