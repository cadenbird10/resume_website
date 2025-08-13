export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    title: 'Data Analyst',
    company: 'BYU Broadcasting',
    location: 'Provo, UT',
    date: 'May 2025 - Present',
    bullets: [
      'Modernized AWS Lambda pipeline by refactoring to Python and deploying with CDK for maintainability',
      'Leveraged SQL to build dataset and perform network analysis that shaped ad-spend strategy for head of sports content by uncovering links between shows, influencing 20+ channel campaigns',
      'Built a retention value model in SQL and Python, enabling the CEO to optimize show budgeting by quantifying user lifetime value through weighted scoring and engagement metrics'
    ],
  },
  {
    title: 'Account Creation Specialist',
    company: 'Vivint',
    location: 'Provo, UT',
    date: 'Mar 2024 - Aug 2025',
    bullets: [
      'Reduced Tableau troubleshooting time by 30%, resolving technical issues faster than company average',
      'Piloted a special projects team to trial new programs, improving operational efficiency during peak sales',
      'Onboarded 7000+ clients using Salesforce, ensuring 100% compliance with company data entry standards',
      'Trained new employees on Tableau analysis and customer service, ensuring operational excellence',
    ],
  },
  {
    title: 'Sales Representative',
    company: 'The Grit',
    location: 'Vineyard, UT',
    date: 'May 2023 - Sep 2023',
    bullets: [
      'Generated $200K revenue in 3 months through strategic customer relationships and persuasive sales',
      'Established relationships with 160+ accounts, with 30% of sales in Spanish, expanding market reach',
      'Achieved top rookie status, leading the team in sales within the shortest tenure',
    ],
  },
  {
    title: 'Volunteer Representative - Spanish Fluency',
    company: 'The Church of Jesus Christ of Latter-day Saints',
    location: 'Queretaro, Mexico',
    date: 'Feb 2021 - Jan 2023',
    bullets: [
      'Designed training programs and led 140+ volunteers, optimizing efficiency and performance',
      'Conducted conferences in Spanish, promoting community engagement and outreach initiatives',
      'Increased area statistical success by 25% in 6 months using strategic planning and volunteer engagement',
    ],
  },
  {
    title: 'Associate Level 6',
    company: 'In-N-Out Burger',
    location: 'Plano, Tx & Orem, UT',
    date: 'Jun 2018 - Jan 2021',
    bullets: [
      'Directed grill operations during peak hours, optimizing workflow to increase sales in 30-minutes intervals',
      'Provided leadership by covering extra shifts, ensuring seamless operation during high-traffic periods',
    ],
  },
];
