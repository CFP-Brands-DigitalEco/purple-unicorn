import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-background.webp"
          alt=""
          fill
          loading="eager"
          className="object-cover opacity-40"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Container>
          {/* Headline Section */}
          <div className="py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Together, Let&apos;s Explore The Team of Your Dreams
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </div>

          {/* Main Footer Content */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column - Logo & Tagline */}
            <div className="space-y-4">
              <Image
                src="/brand/purple-uni-footer-white-logo.webp"
                alt="Purple Unicorn"
                width={180}
                height={60}
                className="h-auto w-auto"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Where exceptional talent meets strategic growth.
              </p>
            </div>

            {/* Middle Column - Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/b2b-services/talent-acquisition"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Talent Acquisition
                  </Link>
                </li>
                <li>
                  <Link
                    href="/b2b-services/hr-consultancy"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    HR Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column - Contact & Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:info@purpluni.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors block"
                >
                  info@purpluni.com
                </a>
                <div className="pt-4">
                  <h4 className="text-sm font-semibold mb-2">Company</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                      >
                        Terms
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="py-6 border-t border-gray-700">
            <p className="text-center text-gray-400 text-sm">
              Copyright 2025. Purple Unicorn Enterprises. All Rights Reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
