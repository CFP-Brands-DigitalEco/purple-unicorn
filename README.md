# Purple Unicorn Website

A modern, professional recruitment and HR consultancy platform built with Next.js, React, and TypeScript.

**Tagline:** *A Candidate So Rare, They're Almost Mythical*

## Technology Stack

- **Next.js 16** (React 19) with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- Google Fonts (Oswald, PT Sans)

## Project Structure

```
purple-unicorn-site/
├── app/                        # Next.js App Router pages
│   ├── page.tsx               # Homepage
│   ├── layout.tsx             # Root layout with navigation
│   ├── jobs/                  # Job board pages
│   │   ├── page.tsx          # Job listings with search/filters
│   │   └── [id]/page.tsx     # Individual job details
│   ├── candidates/            # Candidate-focused pages
│   ├── b2b-services/          # B2B service pages
│   └── get-started/           # Get started flow
├── components/
│   ├── layout/               # Layout components (NavBar, Footer, Container)
│   ├── sections/             # Reusable page sections
│   ├── ui/                   # UI components (Button, etc.)
│   └── jobs/                 # Job board specific components
│       └── JobCard.tsx       # Job listing card component
├── lib/
│   └── mockJobs.ts          # Mock job data (ready for database integration)
└── public/                   # Static assets (images, icons, brand)
```

## Features

### Main Website
- **Homepage** - Hero section, missions, client logos, founder section, testimonials
- **B2B Services** - Talent acquisition and HR consultancy pages
- **Candidates** - Career methodology and candidate resources
- **Navigation** - Responsive navbar with dropdown menus for desktop and mobile

### Job Board (NEW)
- **Job Listings** (`/jobs`) - Searchable, filterable job board with:
  - Real-time search by title, company, or keyword
  - Filter by location and job type (Full-Time, Part-Time, Contract, Remote)
  - Responsive card-based layout
  - Results counter
  - Empty state handling

- **Job Details** (`/jobs/[id]`) - Individual job pages with:
  - Complete job description
  - Responsibilities and requirements
  - Benefits and salary information
  - Apply now functionality
  - Contact options

- **Design Features**:
  - Matches Purple Unicorn brand aesthetic (#4f2170 purple theme)
  - Fully responsive (mobile and desktop optimized)
  - Smooth transitions and hover effects
  - Professional typography hierarchy

### Mock Data Structure
Currently using static mock data in [lib/mockJobs.ts](lib/mockJobs.ts) with the following schema:

```typescript
interface Job {
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
```

This structure is ready for future database integration.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Development Notes

- The job board currently uses mock data from `lib/mockJobs.ts`
- The navigation has been updated to link to the internal `/jobs` page (previously linked to external Breezy HR)
- All components follow the existing design system with Purple Unicorn branding
- Ready for future CRM and database integration

## Future Enhancements

- Database integration (PostgreSQL + Prisma recommended)
- API endpoints for job CRUD operations
- Admin dashboard for job management
- Employee CRM for internal job posting
- Authentication and authorization
- Candidate application tracking
- Email notifications

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
