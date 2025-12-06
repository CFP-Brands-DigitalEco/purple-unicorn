export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Remote';
  salaryRange?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  postedDate: string;
  expirationDate?: string;
  applicationUrl?: string;
  contactEmail?: string;
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    salaryRange: '$140,000 - $180,000',
    description: 'Join our dynamic team as a Senior Software Engineer and help build cutting-edge solutions that impact millions of users. We are looking for a passionate developer with expertise in modern web technologies and a track record of delivering high-quality software.',
    requirements: [
      '5+ years of experience in software development',
      'Strong proficiency in JavaScript/TypeScript, React, and Node.js',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Excellent problem-solving and communication skills',
      'Bachelor\'s degree in Computer Science or related field',
    ],
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with cross-functional teams to define and implement new features',
      'Mentor junior developers and conduct code reviews',
      'Optimize application performance and troubleshoot issues',
      'Stay current with emerging technologies and industry trends',
    ],
    benefits: [
      'Comprehensive health, dental, and vision insurance',
      '401(k) with company match',
      'Flexible work schedule and remote options',
      'Professional development budget',
      'Unlimited PTO',
    ],
    postedDate: '2025-11-28',
    applicationUrl: 'https://purple-unicorn.breezy.hr',
    contactEmail: 'careers@purpluni.com',
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateTech Inc.',
    location: 'New York, NY',
    type: 'Full-Time',
    salaryRange: '$120,000 - $160,000',
    description: 'We are seeking an experienced Product Manager to lead our product strategy and roadmap. You will work closely with engineering, design, and business teams to deliver products that delight our customers and drive business growth.',
    requirements: [
      '4+ years of product management experience',
      'Proven track record of launching successful products',
      'Strong analytical and data-driven decision-making skills',
      'Excellent stakeholder management abilities',
      'Experience with Agile/Scrum methodologies',
    ],
    responsibilities: [
      'Define product vision, strategy, and roadmap',
      'Gather and prioritize product requirements from stakeholders',
      'Work with engineering teams to deliver products on schedule',
      'Analyze market trends and competitive landscape',
      'Measure product success through KPIs and user feedback',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Health and wellness benefits',
      'Hybrid work environment',
      'Learning and development opportunities',
    ],
    postedDate: '2025-11-25',
    applicationUrl: 'https://purple-unicorn.breezy.hr',
    contactEmail: 'careers@purpluni.com',
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Creative Digital Agency',
    location: 'Austin, TX',
    type: 'Remote',
    salaryRange: '$90,000 - $130,000',
    description: 'Join our creative team as a UX/UI Designer and craft beautiful, intuitive user experiences for our diverse client portfolio. We value creativity, collaboration, and a user-centered design approach.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating design process and outcomes',
      'Understanding of responsive design principles',
      'Experience with user research and usability testing',
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and analyze feedback',
      'Collaborate with developers to ensure design implementation',
      'Maintain and evolve design systems',
      'Present design concepts to clients and stakeholders',
    ],
    benefits: [
      'Fully remote position',
      'Flexible working hours',
      'Professional development stipend',
      'Health insurance coverage',
      'Home office setup allowance',
    ],
    postedDate: '2025-11-30',
    applicationUrl: 'https://purple-unicorn.breezy.hr',
    contactEmail: 'careers@purpluni.com',
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'Boston, MA',
    type: 'Full-Time',
    salaryRange: '$130,000 - $170,000',
    description: 'We are looking for a talented Data Scientist to join our analytics team. You will leverage advanced statistical methods and machine learning techniques to extract insights from complex datasets and drive strategic business decisions.',
    requirements: [
      'Master\'s or PhD in Data Science, Statistics, or related field',
      '3+ years of experience in data science or analytics',
      'Strong programming skills in Python and R',
      'Experience with machine learning frameworks (TensorFlow, PyTorch, scikit-learn)',
      'Proficiency in SQL and data visualization tools',
    ],
    responsibilities: [
      'Develop predictive models and machine learning algorithms',
      'Analyze large datasets to identify trends and insights',
      'Communicate findings to non-technical stakeholders',
      'Collaborate with engineering teams to deploy models',
      'Stay updated on latest data science techniques and tools',
    ],
    benefits: [
      'Competitive compensation package',
      'Comprehensive benefits including health and dental',
      'Flexible hybrid work model',
      'Conference and training budget',
      'Stock options',
    ],
    postedDate: '2025-12-01',
    applicationUrl: 'https://purple-unicorn.breezy.hr',
    contactEmail: 'careers@purpluni.com',
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudScale Systems',
    location: 'Seattle, WA',
    type: 'Full-Time',
    salaryRange: '$125,000 - $165,000',
    description: 'Join our infrastructure team as a DevOps Engineer and help us build and maintain scalable, reliable cloud infrastructure. You will work on automation, CI/CD pipelines, and infrastructure as code.',
    requirements: [
      '4+ years of DevOps or infrastructure experience',
      'Strong knowledge of AWS, Azure, or GCP',
      'Experience with Docker, Kubernetes, and container orchestration',
      'Proficiency in scripting languages (Python, Bash, Go)',
      'Familiarity with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
    ],
    responsibilities: [
      'Design and implement cloud infrastructure solutions',
      'Build and maintain CI/CD pipelines',
      'Automate deployment and monitoring processes',
      'Ensure system reliability, security, and performance',
      'Troubleshoot production issues and implement solutions',
    ],
    benefits: [
      'Excellent health and dental coverage',
      '401(k) matching',
      'Remote work flexibility',
      'Annual performance bonuses',
      'Generous vacation policy',
    ],
    postedDate: '2025-12-02',
    applicationUrl: 'https://purple-unicorn.breezy.hr',
    contactEmail: 'careers@purpluni.com',
  },
  {
    id: '6',
    title: 'Marketing Manager',
    company: 'Growth Marketing Co.',
    location: 'Los Angeles, CA',
    type: 'Full-Time',
    salaryRange: '$100,000 - $140,000',
    description: 'We are seeking a creative and data-driven Marketing Manager to lead our marketing initiatives. You will develop and execute marketing strategies that drive brand awareness, customer acquisition, and revenue growth.',
    requirements: [
      '5+ years of marketing experience, preferably in B2B SaaS',
      'Proven track record of successful marketing campaigns',
      'Strong analytical skills and experience with marketing analytics tools',
      'Excellent written and verbal communication skills',
      'Experience with digital marketing channels (SEO, SEM, email, social)',
    ],
    responsibilities: [
      'Develop and execute comprehensive marketing strategies',
      'Manage marketing budget and optimize ROI',
      'Lead content marketing and brand positioning efforts',
      'Analyze campaign performance and provide insights',
      'Manage relationships with external agencies and vendors',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health, dental, and vision insurance',
      'Hybrid work schedule',
      'Professional development opportunities',
      'Collaborative team culture',
    ],
    postedDate: '2025-11-27',
    applicationUrl: 'https://purple-unicorn.breezy.hr',
    contactEmail: 'careers@purpluni.com',
  },
];
