'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { Button } from '../ui/Button';

type OpenMenu = 'signin' | null;

export function NavBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileSignInOpen, setMobileSignInOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const getNavItemClasses = (path: string) => {
    const base = 'inline-flex items-center rounded-lg px-4 py-2 font-medium transition-all duration-200';
    if (isActive(path)) {
      return `${base} bg-white text-[#4f2170] font-semibold shadow-sm`;
    }
    return `${base} text-slate-700 hover:bg-white hover:text-[#4f2170]`;
  };

  const getDropdownButtonClasses = (isOpen: boolean, menuPath: string) => {
    const base = 'inline-flex items-center rounded-lg px-4 py-2 font-medium transition-all duration-200';
    if (isActive(menuPath)) {
      return `${base} bg-white text-[#4f2170] font-semibold shadow-sm`;
    }
    if (isOpen) {
      return `${base} bg-white text-[#4f2170]`;
    }
    return `${base} text-slate-700 hover:bg-white hover:text-[#4f2170]`;
  };

  return (
    <nav className="bg-[#f5f5f7] border-b border-slate-200">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Logo and Tagline Section */}
        <div className="py-3 border-b border-slate-200">
          <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <Link href="/" className="mb-2">
                <Image
                  src="/brand/purpleuni-logo.webp"
                  alt="Purple Unicorn"
                  width={280}
                  height={84}
                  priority
                  className="h-auto w-auto"
                />
              </Link>
              <p className="text-[#4f2170] text-base font-semibold italic ml-3">
                A Candidate So Rare, They&apos;re Almost Mythical
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="py-2">
          <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Centered Nav Links */}
              <div className="flex-1 flex items-center justify-center gap-2">
                {/* Home */}
                <Link href="/" className={getNavItemClasses('/')}>
                  Home
                </Link>

                {/* Talent Acquisition */}
                <Link href="/b2b-services/talent-acquisition" className={getNavItemClasses('/b2b-services/talent-acquisition')}>
                  Talent Acquisition
                </Link>

                {/* HR Consultancy */}
                <Link href="/b2b-services/hr-consultancy" className={getNavItemClasses('/b2b-services/hr-consultancy')}>
                  HR Consultancy
                </Link>

                {/* Candidates */}
                <Link href="/candidates" className={getNavItemClasses('/candidates')}>
                  Candidates
                </Link>

                {/* Bootcamps */}
                <Link href="/bootcamps" className={getNavItemClasses('/bootcamps')}>
                  Bootcamps
                </Link>

                {/* Testimonials */}
                <Link href="/testimonials" className={getNavItemClasses('/testimonials')}>
                  Testimonials
                </Link>

                {/* HOT JOBS! - External Link */}
                <a
                  href="https://purple-unicorn.breezy.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg px-4 py-2 font-medium text-slate-700 hover:bg-white hover:text-[#4f2170] transition-all duration-200"
                >
                  HOT JOBS!
                </a>

                {/* Sign In Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenMenu('signin')}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className={getDropdownButtonClasses(openMenu === 'signin', '/sign-in')}
                    aria-haspopup="true"
                    aria-expanded={openMenu === 'signin'}
                    onFocus={() => setOpenMenu('signin')}
                    onBlur={(e) => {
                      if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                        setOpenMenu(null);
                      }
                    }}
                  >
                    Sign In
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${openMenu === 'signin' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openMenu === 'signin' && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="min-w-60 rounded-lg bg-white shadow-lg border border-purple-100 py-2">
                        <Link
                          href="/sign-in/payment"
                          className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                          onBlur={(e) => {
                            if (!e.currentTarget.parentElement?.parentElement?.parentElement?.contains(e.relatedTarget)) {
                              setOpenMenu(null);
                            }
                          }}
                        >
                          Payment Login
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Get Started Button */}
              <div className="ml-8">
                <Button variant="primary" href="/get-started">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <Container>
          {/* Logo and Hamburger Row */}
          <div className="flex items-center justify-between py-4">
            {/* Logo with Tagline */}
            <Link href="/" className="flex flex-col">
              <Image
                src="/brand/purpleuni-logo.webp"
                alt="Purple Unicorn"
                width={160}
                height={48}
                priority
                className="h-auto w-auto mb-1"
              />
              <p className="text-[#4f2170] text-[10px] font-medium italic leading-tight">
                A Candidate So Rare, They&apos;re Almost Mythical
              </p>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#4f2170] focus:outline-none rounded-lg hover:bg-white transition-colors flex-shrink-0"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="py-4 border-t border-purple-100">
              <div className="flex flex-col gap-2">
                {/* Home */}
                <Link
                  href="/"
                  className={`${
                    isActive('/') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700'
                  } rounded-lg px-4 py-3 hover:bg-purple-50 hover:text-purple-600 transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Talent Acquisition */}
                <Link
                  href="/b2b-services/talent-acquisition"
                  className={`${
                    isActive('/b2b-services/talent-acquisition') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700'
                  } rounded-lg px-4 py-3 hover:bg-purple-50 hover:text-purple-600 transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Talent Acquisition
                </Link>

                {/* HR Consultancy */}
                <Link
                  href="/b2b-services/hr-consultancy"
                  className={`${
                    isActive('/b2b-services/hr-consultancy') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700'
                  } rounded-lg px-4 py-3 hover:bg-purple-50 hover:text-purple-600 transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HR Consultancy
                </Link>

                {/* Candidates */}
                <Link
                  href="/candidates"
                  className={`${
                    isActive('/candidates') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700'
                  } rounded-lg px-4 py-3 hover:bg-purple-50 hover:text-purple-600 transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Candidates
                </Link>

                {/* Bootcamps */}
                <Link
                  href="/bootcamps"
                  className={`${
                    isActive('/bootcamps') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700'
                  } rounded-lg px-4 py-3 hover:bg-purple-50 hover:text-purple-600 transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bootcamps
                </Link>

                {/* Testimonials */}
                <Link
                  href="/testimonials"
                  className={`${
                    isActive('/testimonials') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700'
                  } rounded-lg px-4 py-3 hover:bg-purple-50 hover:text-purple-600 transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>

                {/* HOT JOBS! */}
                <a
                  href="https://purple-unicorn.breezy.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 rounded-lg px-4 py-3 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOT JOBS!
                </a>

                {/* Sign In Accordion */}
                <div>
                  <button
                    onClick={() => setMobileSignInOpen(!mobileSignInOpen)}
                    className={`${
                      isActive('/sign-in') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700'
                    } w-full flex items-center justify-between rounded-lg px-4 py-3 hover:bg-purple-50 hover:text-purple-600 transition-colors`}
                    aria-expanded={mobileSignInOpen}
                  >
                    Sign In
                    <svg
                      className={`h-4 w-4 transition-transform ${mobileSignInOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSignInOpen && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      <Link
                        href="/sign-in/payment"
                        className="rounded-lg px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Payment Login
                      </Link>
                    </div>
                  )}
                </div>

                {/* Get Started Button */}
                <div className="pt-2">
                  <Button variant="primary" href="/get-started" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </nav>
  );
}
