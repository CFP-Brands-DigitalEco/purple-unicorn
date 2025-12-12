export interface Bootcamp {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  audience: string;
  formatSummary: string;
  duration: string;
  locationType: 'online' | 'in-person' | 'hybrid';
  priceRange?: string;
  description: string;
  highlights: string[];
  ctaPrimaryLabel: string;
  ctaSecondaryLabel?: string;
  ctaTertiaryLabel?: string;
}

export const bootcamps: Bootcamp[] = [
  {
    id: '1',
    slug: 'college-coaching-bootcamp',
    name: 'The College Coaching Bootcamp',
    tagline: 'Turning uncertainty into opportunity.',
    audience: 'Students, campus groups, and early-career talent.',
    formatSummary: 'Small-group, live online coaching over 4 weeks.',
    duration: '5.5 hours over 4 weeks',
    locationType: 'online',
    priceRange: 'Programs typically range from single-session intensives to full multi-week bootcamps, with group pricing available.',
    description: 'The College Coaching Bootcamp is a flexible, small-group program led by Fortune 500 talent executives. In just 5.5 hours over 4 weeks of interactive coaching, students move from overwhelmed to empowered—discovering values, building personal brands, strengthening résumés and LinkedIn profiles, and learning how to network and tell their story with confidence.',
    highlights: [
      'Career mapping & values discovery',
      'Résumé strategy & LinkedIn optimization',
      'Personal branding & elevator pitch',
      'Strategic storytelling for interviews & networking',
      'Application strategy & interview prep',
      'Career alignment & storytelling for impact',
    ],
    ctaPrimaryLabel: 'Sign Up for an Upcoming Bootcamp',
    ctaSecondaryLabel: 'Register for an Intensive 60–90 Minute Session',
    ctaTertiaryLabel: 'Book 1:1 Coaching',
  },
];
