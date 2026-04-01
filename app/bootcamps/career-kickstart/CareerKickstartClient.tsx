'use client';

import { useState, useRef, useEffect } from 'react';

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

export function CareerKickstartClient() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', school: '', gradYear: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (showPayment) formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [showPayment]);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      <section className="bg-[#1a0d2e] text-white">
        <div className="max-w-3xl mx-auto px-4 pt-14 pb-12 text-center">

          <p className="text-purple-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Career Kickstart Workshop
          </p>
          <div className="w-10 h-px bg-purple-500/50 mx-auto mb-6" />

          {/* Session strip — above headline */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['April 7th', '90 Min', 'Live Online', 'Limited Seats'].map((label) => (
              <span key={label} className="inline-flex items-center text-purple-300 text-xs font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                {label}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Why Great Students Get Filtered Out of Jobs They Qualify For
          </h1>

          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-purple-200 text-lg md:text-xl leading-relaxed">
              A live, 90-minute workshop highlighting what recruiters look for across resumes, LinkedIn, and networking outreach so you start getting interviews.
            </p>
          </div>

          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto px-8 py-5 bg-[#6b2f96] text-white font-bold text-xl tracking-wide rounded-xl hover:bg-[#7d38b0] transition-all duration-200 hover:scale-[1.02] shadow-2xl shadow-purple-900/50"
          >
            Reserve My Seat — $99
          </button>
          <p className="mt-3 text-purple-300 text-sm">
            Not valuable? Full refund within 24 hours. No questions asked.
          </p>

        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">

        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-6">This Session Is For You If:</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-4">Why Most Students Struggle to Land an Internship</h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">Most students treat the job search like a numbers game — send enough applications and eventually something sticks. It doesn't work that way.</p>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">The difference between students who land internships and those who keep waiting is rarely effort. It's almost always strategy. Most students are never shown how recruiters actually evaluate candidates or what makes one resume stand out over another. This workshop fixes that.</p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <blockquote className="text-slate-700 italic text-base leading-relaxed">&ldquo;After graduating from FSU in 2022, I had no idea what I wanted to do. Purple Unicorn Career Coaching is the reason I can proudly say I successfully entered the corporate world and have been thriving.&rdquo;</blockquote>
            <p className="mt-3 text-sm font-semibold text-[#4f2170]">Julia B. — FSU Graduate, Class of 2022</p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-4">Meet Your Instructors</h2>
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
              <p className="text-slate-700 leading-relaxed">Eric Miller is a career coach who helps students translate their strengths into internship offers. His approach focuses on clarity, practical tools, and structured preparation so students can stand out with their resume, LinkedIn profile, and interview story.</p>
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
              <p className="text-slate-700 leading-relaxed">Suzanne Rosenthal is a seasoned talent leader with 25+ years in media who has led emerging talent programs and partnered with colleges and national nonprofits to expand access to internships and full-time roles.</p>
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

        {/* REGISTRATION FORM */}
        <section ref={formRef} id="register" className="bg-[#1a0d2e] rounded-xl p-8 scroll-mt-24">
          <div className="max-w-lg mx-auto">

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className={`flex items-center gap-2 text-sm font-semibold ${showPayment ? 'text-green-400' : 'text-white'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${showPayment ? 'bg-green-500 text-white' : 'bg-[#6b2f96] text-white'}`}>
                  {showPayment ? (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : '1'}
                </span>
                Your Info
              </div>
              <div className={`flex-1 h-px max-w-[60px] ${showPayment ? 'bg-green-500/60' : 'bg-white/20'}`} />
              <div className={`flex items-center gap-2 text-sm font-semibold ${showPayment ? 'text-white' : 'text-white/40'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${showPayment ? 'bg-[#6b2f96] text-white' : 'bg-white/10 text-white/40'}`}>2</span>
                Payment
              </div>
            </div>

            {showPayment ? (
              <div className="text-center">
                {/* Checkmark */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping [animation-duration:3s]" />
                  <div className="relative w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <svg className="w-9 h-9 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Your spot is saved!</h2>
                <p className="text-purple-300 mb-6">Complete payment below to confirm your registration for April 7th.</p>

                {/* Zoom link promise */}
                <div className="bg-purple-900/40 border border-purple-500/30 rounded-xl p-4 mb-4 text-left flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-purple-200 text-sm leading-relaxed">
                    Once payment is confirmed, your <strong className="text-white">Zoom session link</strong> will be sent to you by email on the day of the workshop.
                  </p>
                </div>

                {/* Calendar warning */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-8 text-left flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-amber-200 text-sm leading-relaxed">
                    <strong className="text-amber-100">Add April 7th to your calendar now.</strong>
                  </p>
                </div>

                {/* CTA */}
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-[#6b2f96] opacity-40 blur-md group-hover:opacity-60 animate-pulse transition-opacity" />
                  <a
                    href="https://app.payra.com/7UJ6XP42G6A8/paymentLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex w-full items-center justify-center py-5 bg-[#6b2f96] text-white font-bold text-xl rounded-xl hover:bg-[#7d38b0] transition-all duration-200 hover:scale-[1.02] shadow-2xl shadow-purple-900/60 text-center"
                  >
                    Continue to Payment — $99
                  </a>
                </div>

                <p className="mt-4 text-purple-400 text-sm">
                  Not valuable? Full refund within 24 hours. No questions asked.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-1">Secure Your Spot for April 7th</h2>
                <p className="text-purple-400 text-sm text-center mb-8">{SESSION_DATE} · Live Online · 90 Minutes</p>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label className="block text-purple-200 text-sm font-semibold mb-1.5">Full Name <span className="text-purple-400">*</span></label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-3.5 border border-white/15 rounded-xl bg-white/8 text-white placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-purple-400/60 focus:bg-white/12 transition-all" />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-sm font-semibold mb-1.5">Email Address <span className="text-purple-400">*</span></label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3.5 border border-white/15 rounded-xl bg-white/8 text-white placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-purple-400/60 focus:bg-white/12 transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-purple-200 text-sm font-semibold mb-1.5">School <span className="text-purple-500 font-normal text-xs">(optional)</span></label>
                      <input type="text" name="school" value={formData.school} onChange={handleChange} placeholder="Your college" className="w-full px-4 py-3.5 border border-white/15 rounded-xl bg-white/8 text-white placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-purple-400/60 focus:bg-white/12 transition-all" />
                    </div>
                    <div>
                      <label className="block text-purple-200 text-sm font-semibold mb-1.5">Grad Year <span className="text-purple-500 font-normal text-xs">(optional)</span></label>
                      <select name="gradYear" value={formData.gradYear} onChange={handleChange} className="w-full px-4 py-3.5 border border-white/15 rounded-xl bg-[#1a0d2e] text-white focus:outline-none focus:ring-2 focus:ring-purple-400/60 transition-all">
                        <option value="">Year</option>
                        {['2025','2026','2027','2028','2029'].map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>
                  {submitError && <p className="text-red-300 text-sm bg-red-900/30 rounded-xl px-4 py-3">{submitError}</p>}
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#6b2f96] text-white font-bold text-lg rounded-xl hover:bg-[#7d38b0] hover:scale-[1.01] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 mt-1 shadow-xl shadow-purple-900/40">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Saving your spot...
                      </span>
                    ) : 'Save My Spot & Continue →'}
                  </button>
                  <p className="text-purple-400 text-sm text-center">
                    Not valuable? Full refund within 24 hours. No questions asked.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>

        {/* FAQ — last */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f2170] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <button className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <span className="text-[#4f2170] font-bold text-xl shrink-0 leading-none">{openFaq === i ? '−' : '+'}</span>
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
