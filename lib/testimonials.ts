export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  tags: TestimonialTag[];
  featured?: boolean;
}

export type TestimonialTag =
  // Service-based tags
  | 'career-coaching'
  | 'talent-acquisition'
  | 'hr-consultancy'
  // Audience-based tags
  | 'recent-grad'
  | 'career-changer'
  | 'executive'
  | 'employer'
  | 'tech-industry'
  | 'student';

export const tagLabels: Record<TestimonialTag, string> = {
  // Services
  'career-coaching': 'Career Coaching',
  'talent-acquisition': 'Talent Acquisition',
  'hr-consultancy': 'HR Consulting',
  // Audiences
  'recent-grad': 'Recent Graduate',
  'career-changer': 'Career Changer',
  'executive': 'Executive',
  'employer': 'Employer',
  'tech-industry': 'Tech Industry',
  'student': 'Student',
};

// Filter group definitions
export type CareerStageFilter = 'early-career' | 'career-transition' | 'mid-career' | 'executive-leader' | 'employer';
export type ServiceTypeFilter = 'career-coaching' | 'executive-coaching' | 'talent-acquisition' | 'hr-consulting';

export const careerStageLabels: Record<CareerStageFilter, string> = {
  'early-career': 'Early Career',
  'career-transition': 'Career Transition',
  'mid-career': 'Mid-Career',
  'executive-leader': 'Executive / Leader',
  'employer': 'Employer',
};

export const serviceTypeLabels: Record<ServiceTypeFilter, string> = {
  'career-coaching': 'Coaching',
  'executive-coaching': 'Executive Coaching',
  'talent-acquisition': 'Talent Acquisition',
  'hr-consulting': 'HR Consulting',
};

// Map filters to testimonial tags
export const mapCareerStageToTags = (stage: CareerStageFilter): TestimonialTag[] => {
  switch (stage) {
    case 'early-career':
      return ['recent-grad', 'student'];
    case 'career-transition':
      return ['career-changer'];
    case 'mid-career':
      return []; // Future-ready, currently returns none
    case 'executive-leader':
      return ['executive'];
    case 'employer':
      return ['employer'];
  }
};

export const mapServiceTypeToTags = (service: ServiceTypeFilter): TestimonialTag[] => {
  switch (service) {
    case 'career-coaching':
      return ['career-coaching'];
    case 'executive-coaching':
      return []; // Future-ready, currently returns none
    case 'talent-acquisition':
      return ['talent-acquisition'];
    case 'hr-consulting':
      return ['hr-consultancy'];
  }
};

// Get all unique tags from testimonials
export const getAllTags = (): TestimonialTag[] => {
  const tagSet = new Set<TestimonialTag>();
  testimonials.forEach(t => t.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Chelsea J.',
    quote: "Jenni and her team of dedicated, talented, and knowledgeable professionals were an invaluable resource throughout my job search. Conor helped me define my career goals—and even uncover new ones I hadn't considered. Christian completely revamped my LinkedIn profile and resume, making a huge difference in how I presented myself. Daniela supported me every step of the way, from our first meeting through interviews and the final offer. Their firsthand experience navigating today's job market gave me the confidence and tools to successfully shift into a new career field and land my dream job. It was well worth the investment—truly an invaluable experience.",
    tags: ['career-coaching', 'career-changer'],
    featured: true,
  },
  {
    id: '2',
    name: 'Darrell C.',
    role: 'Director, Digital Audits',
    company: 'Google',
    quote: "I used Purple Unicorn recently to help me change jobs, and they were instrumental in helping me land a new gig at Google. They are a team of ex-AWS recruiters who really understand the tech job market and have a lot of inside information. I worked with Jenni, their CEO who was amazing. She also set-up meetings for me with other career coaches who had specific skill sets that were really valuable. For me, their interview prep made a huge difference - they really had the inside track. When it came time to negotiate my offer, their advice was spot-on and helped me secure a 25% increase in total comp. There are definitely cheaper options out there if you just want to update your resume or LinkedIn profile, but for me, Purple Unicorn was definitely worth the investment.",
    tags: ['career-coaching', 'tech-industry', 'executive'],
    featured: true,
  },
  {
    id: '3',
    name: 'Jake C.',
    quote: "I had the pleasure of consulting with Jenni Smith in 2020. As someone who was early-in-career in big tech and looking to earn an offer, I hoped to engage with someone that not only knew the ins-and-outs of the industry, but also someone who could adapt their own time-tested practices to my niche career situation. Jenni exceeded all expectations as she helped me navigate delicate conversations regarding relocation without jeopardizing my chances of receiving an offer. She was meticulous, thorough, and leveraged her career expertise in the tech industry to tailor an approach that was unique to my circumstance. With Jenni's help, I successfully accepted an offer which would ultimately be amended to be in the city that I hoped to move to. I would recommend Purple Unicorn to anyone seeking clarity on an important juncture in their career, whether they are interns, new graduates, or experienced professionals.",
    tags: ['career-coaching', 'tech-industry', 'career-changer'],
    featured: true,
  },
  {
    id: '4',
    name: 'Shane J.',
    quote: "I am writing to highly recommend Purple Unicorn and their exceptional career coaching program. Over the past six months, I have had the privilege of partnering with them closely, and have consistently been impressed by their professionalism, expertise, and dedication to helping individuals achieve their career goals. Daniela and Jenni possess a rare combination of knowledge, insight, and empathy that makes them an invaluable resource for anyone navigating the complexities of the job market or seeking to advance their career. They have a deep understanding of various industries and job markets, and their guidance is always tailored to meet the specific needs and aspirations of my long term goals. During our coaching sessions, Daniela demonstrated an exceptional ability to ask insightful questions, challenge assumptions, and provide constructive feedback. They helped me identify my strengths and areas for improvement, develop effective strategies for achieving my career objectives, and navigate challenges with confidence and resilience. I can't thank them both enough! I was able to achieve numerous offers too!",
    tags: ['career-coaching', 'career-changer'],
    featured: true,
  },
  {
    id: '5',
    name: 'Lindi Brooks',
    role: 'CEO',
    company: 'VMP',
    quote: "Partnering with Purple Unicorn Talent Solutions and Jenni Smith has been nothing short of transformative for VMP. In a highly specialized aftermarket industry, finding the right talent can feel nearly impossible. Jenni not only delivered, but she did so with precision and speed, successfully placing my VP of Operations in record time. What sets Jenni apart is the trust she builds, her fair and transparent cost structure, and her relentless commitment to understanding the unique demands of my business. She continuously pipelines top-tier talent so that I can stay focused on growth, knowing my team is always supported. For CEOs like me navigating niche markets, this kind of partnership is invaluable. If you're serious about elevating your organization with the right people, call Jenni and her team immediately—you won't regret it.",
    tags: ['talent-acquisition', 'employer', 'executive'],
    featured: true,
  },
  {
    id: '6',
    name: 'Rama K.',
    quote: "I had the pleasure of working with Purple Unicorn on a career development project, and I was highly impressed with their expertise and dedication. Jenni is a true professional and has a wealth of experience in the industry. She is a great listener and takes the time to understand her clients' needs and goals. She is also very knowledgeable about the latest trends and best practices in the field. One of the things that stood out to me the most was her commitment to providing ongoing support and resources. She provided me with numerous materials and tools to help me achieve my career goals, and she was always available to answer any questions or concerns. Overall, I highly recommend Jenni as a career coach and partner. She is a talented and experienced professional who truly cares about the success of her clients and their career success.",
    tags: ['career-coaching', 'career-changer'],
    featured: true,
  },
  {
    id: '7',
    name: 'Victoria S.',
    quote: "Thank you so much for your kind and motivating approach to career coaching. It was meant to be that I came across Purple Unicorn, and I am so grateful. Thank you for going out of your way to help me with every step of the process. You've really given me a clear action plan towards my goals and dreams of moving to NYC. I'm so excited, though it can be overwhelming, your help has eased that feeling tremendously. I truly appreciate you.",
    tags: ['career-coaching', 'career-changer'],
  },
  {
    id: '8',
    name: 'Saurav S.',
    role: 'Business Intelligence, AI, and Data Analytics',
    quote: "Regarding my broader experiences, I can attest to the transformative impact of high-quality career coaching services, particularly in the realms of business intelligence, AI, and data analytics. In the professional sphere, I've witnessed numerous talented individuals, across various career stages, grappling with a lack of clarity and direction. Given the vast and dynamic nature of these fields, a proficient career coach can help individuals align with the business needs rather than attempting to master every aspect.",
    tags: ['career-coaching', 'tech-industry'],
  },
  {
    id: '9',
    name: 'Julia B.',
    role: 'FSU graduate (2022)',
    quote: "After graduating from FSU in 2022, I had no idea what I wanted to do or what to make of my degree. A lot of my peers had jobs lined up after graduation or knew what they wanted to do – I was the total opposite. Purple Unicorn Career Coaching is the reason I can proudly say that I successfully entered the corporate world and have been thriving for the past year and a half. The guidance and help offered by Purple Unicorn gave me the confidence and tools I needed to succeed in entering the workforce. Through one-on-one coaching, I was able to identify and apply to jobs that suited me best, learned how to manage the job application process, master the interview questions, and so much more. A million times thank you to Purple Unicorn and their team for helping me reach my highest potential and helping me level up.",
    tags: ['career-coaching', 'recent-grad'],
  },
  {
    id: '10',
    name: 'Susan B.',
    quote: "Jenni Smith and I worked together with frequent daily exchanges for approximately six months. She is an excellent listener and asked probing questions to truly gauge my interests and aspirations. My focus at the time was on company culture and work/life balance, as I had my hands full in my current role with little harmony. All introductions were seamless and the interview prep provided was bar-raising. I had worked with another Career Coach who gave me the opposite impression. After working with Purple Unicorn, I NOW appreciate what a career expert and partner relationship can, and should, look like.",
    tags: ['career-coaching', 'career-changer'],
  },
  {
    id: '11',
    name: 'Rederico F.',
    quote: "I am writing to highly recommend Purple Unicorn and their exceptional career coaching program. Over the past six months, I have had the privilege of partnering with them closely, and have consistently been impressed by their professionalism, expertise, and dedication to helping individuals achieve their career goals. Daniela and Jenni possess a rare combination of knowledge, insight, and empathy that makes them an invaluable resource for anyone navigating the complexities of the job market or seeking to advance their career. They have a deep understanding of various industries and job markets, and their guidance is always tailored to meet the specific needs and aspirations of my long term goals. During our coaching sessions, Daniela demonstrated an exceptional ability to ask insightful questions, challenge assumptions, and provide constructive feedback. They helped me identify my strengths and areas for improvement, develop effective strategies for achieving my career objectives, and navigate challenges with confidence and resilience. I can't thank them both enough! I was able to achieve numerous offers too!",
    tags: ['career-coaching', 'career-changer'],
  },
  {
    id: '12',
    name: 'Anonymous',
    quote: "Hi! I used their services this year and Purple Unicorn is great!! I came across them through a random google search and was so grateful. Jenni who runs the company is great as is everyone on her team! I was relocating and starting a new job in a completely new field and she really helped me! Landed a great job and made the move happen! Everyone was very accessible and answered any of my questions along the way. She especially helped me in crafting my resume and completely revamped it to tailor to the new field I was applying for jobs in. Her and the team also helped me with getting connections and interview prep. What I really appreciated is also that it's not just 12 sessions. As long as you are actively doing the work, they will help you beyond that and go out of their way to schedule extra calls to meet you where you are at and help you above and beyond. And the price doesn't change. That is all included. Even after I got the job, I had questions on reviewing the contract and benefits, and she still helped me with that! I highly recommend them! It's an investment that's worth the price.",
    tags: ['career-coaching', 'career-changer'],
  },
  {
    id: '13',
    name: 'Sutapa S.',
    quote: "I am so glad I found Purple Unicorn. Their guidance, support and strategic prep in getting me a new role was exceptional. Jennifer Smith (Jenni), the CEO, worked closely with me and was really the help that made all the difference. They have a great team who lead you through every step, right from resume building, creating your brand, putting you out in the job market as the real deal, interview prep to job offer negotiations and post-joining guidance. Overall, it was a great experience not only discovering a legit professional coaching service but also great human beings to stay in touch with.",
    tags: ['career-coaching', 'career-changer'],
  },
  {
    id: '14',
    name: 'Dr. Andrew S.',
    role: 'CEO and Physician',
    quote: "I recently referred a friend's daughter who graduated 6 months ago with an amazing finance degree and could not find a job after sending out dozens of resumes and several interviews. After working with them for only 7 weeks, she was confident, locked in, prepped properly and got her resume on point and noticed. She landed a fantastic opportunity and was hired last month! She learned what questions she should be asking the potential employer, and was given continued support as to how to stand out in her new job so she gets noticed for her hard work. Her feedback was that they are more than just a coach, rather a mentor who has had decades in high level corporate and knows what companies look for, and what they do not. Forever grateful for finding this company to change her life!",
    tags: ['career-coaching', 'recent-grad', 'executive'],
  },
  {
    id: '15',
    name: 'R. Ramdohr',
    role: 'AVP & Risk Analyst',
    company: 'BayFirst National Bank',
    quote: "Jenni is a highly successful career coach & recruiter. She is energetic, thoughtful, and goes above & beyond for her clients. I would recommend any of her programs, especially if you're a career professional looking to transition into a new industry or just need a refresher on switching careers.",
    tags: ['career-coaching', 'executive'],
  },
  {
    id: '16',
    name: 'J. Levin',
    role: 'Entertainment Operations Intern',
    company: 'Universal',
    quote: "I wanted to get back to you regarding the results of my internship interview. Earlier this week, I received a call from the HR recruiter at Universal, informing me that I was given an offer for the Entertainment Operations internship. I have accepted this offer for the fall semester internship with Universal and am beyond excited for this opportunity! This role was only given to one person and I feel so grateful to have been offered this position! I am so grateful for the resources and assistance that you provided me with for preparation for my previous interview for this role as I really feel they helped me prepare to be the best version of myself in the interview! I just wanted to update you with this exciting news! Thank you again so much for your help and I hope you have a great week!",
    tags: ['career-coaching', 'student', 'recent-grad'],
  },
];
