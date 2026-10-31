export const REPO = 'https://github.com/mofopeadegoke/job-hunt-kit';
export const AUTHOR_URL = 'https://github.com/mofopeadegoke';
export const INSTALL = '/plugin install job-hunt-kit --marketplace mofopeadegoke/job-hunt-kit';

export const NAV = [
  { href: '/example/', label: 'See an Example' },
  { href: '/get-started/', label: 'Get Started' },
  { href: '/honesty-rules/', label: 'Honesty Rules' },
  { href: '/research-evals/', label: 'Research & Evals' },
];

const WARNING =
  'Please do not paste resume text, facts.md or personal details here. GitHub issues are public.';

function issue(title, prompts) {
  const body = `${WARNING}\n\n${prompts.join('\n\n')}`;
  return `${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}

export const ISSUES = [
  {
    label: 'A claim on this site is wrong',
    href: issue('Website claim: ', ['Which claim, on which page?', 'Why is it wrong?']),
  },
  {
    label: 'It invented or inflated something',
    href: issue('Honesty rule broken: ', [
      'Which rule was broken?',
      'Describe what happened, using made-up details rather than your own.',
    ]),
  },
  {
    label: 'Something broke or confused me',
    href: issue('Problem: ', [
      'What were you trying to do?',
      'What happened instead?',
      'Your Claude Code version and operating system:',
    ]),
  },
];
export const ISSUE_GENERAL = issue('', ['What should change?']);

/* Output of the ats-optimize skill, run through Claude on the fictional Jane Doe
   fixture and the fictional Pollen posting from the plugin repo. Re-run to change. */
export const VERDICT =
  'A strong match on React, testing and component work, and worth applying to. The biggest risk is TypeScript: the role asks for 3+ years, and Jane has about 2.5 years at an employer plus part-time freelance use since Jan 2023.';

export const KNOCKOUTS = [
  ['3+ years of React', 'Professional since Jun 2022', 'Met'],
  ['3+ years of TypeScript', 'Professional since Mar 2024, freelance since Jan 2023', 'Not met at an employer; met only if the employer counts freelance work'],
  ['Work from an EMEA country where Pollen can hire', 'Nairobi, Kenya', 'Unclear; the employer must confirm it can hire in Kenya'],
  ['4 hours of overlap with 9:00–17:00 CET', 'EAT (GMT+3)', 'Met'],
  ['Clear written English', 'English, fluent, professional use', 'Met'],
];

export const TITLE_NOTE =
  'ATS searches use your latest job title. Her employer title, “Frontend Developer”, doesn’t contain “Frontend Engineer” and can’t be changed. Her freelance work is ongoing and its title is hers to set, so it is listed first as “Freelance Frontend Engineer”, an alternative in her facts, with “part-time” kept visible.';

export const REQUIREMENTS = [
  { name: 'React web app features', need: 'Required', status: 'On resume', change: 'Kept first under Brightleaf Labs.', facts: 'BL-1', lines: ['bl1'] },
  { name: 'TypeScript', need: 'Required', status: 'On resume', change: 'Dates stated plainly in the summary, with no years figure attached.', facts: 'BL-1, FR-4', lines: ['summary', 'fr2', 'bl1'] },
  { name: 'Component library or design system', need: 'Required', status: 'Partial match', change: 'Kept “reusable React components”. Removed “component libraries” from the summary.', facts: 'BL-3', lines: ['bl2', 'summary'] },
  { name: 'Storybook', need: 'Required', status: 'Moved higher', change: 'Now the second bullet under Brightleaf Labs.', facts: 'BL-3', lines: ['bl2'] },
  { name: 'Unit and component tests', need: 'Required', status: 'Moved higher', change: 'Now second under Kijiji Health.', facts: 'KH-4', lines: ['kh2'] },
  { name: 'End-to-end tests (Playwright)', need: 'Required', status: 'Added from facts', change: 'New bullet and skill.', facts: 'BL-5', lines: ['bl3', 'tools'] },
  { name: 'Web performance', need: 'Required', status: 'Moved higher', change: 'Bullet moved up, and Lighthouse added to skills.', facts: 'BL-4', lines: ['bl4', 'tools'] },
  { name: 'Core Web Vitals', need: 'Required', status: 'Partial match', change: 'Kept the Lighthouse wording. No fact mentions Core Web Vitals.', facts: 'BL-4', lines: ['bl4'] },
  { name: 'Web accessibility (WCAG)', need: 'Required', status: 'Moved higher', change: 'Added to skills.', facts: 'TS-1', lines: ['tools', 'ts1'] },
  { name: 'Code review and pairing', need: 'Required', status: 'Added from facts', change: 'New bullet.', facts: 'BL-6', lines: ['bl6'] },
  { name: 'REST APIs', need: 'Required', status: 'On resume', change: 'No change.', facts: 'KH-3', lines: ['kh3'] },
  { name: 'Next.js', need: 'Nice to have', status: 'Moved higher', change: 'Freelance work moved from Projects to Experience.', facts: 'FR-1', lines: ['fr1'] },
  { name: 'B2B SaaS', need: 'Nice to have', status: 'Partial match', change: 'Payments software for small merchants, left as described.', facts: 'BL-1', lines: ['bl1'] },
  { name: 'Data visualization (D3, Recharts, Visx)', need: 'Nice to have', status: 'Missing', change: 'Not added. No fact supports it.', facts: '', lines: [] },
  { name: 'GraphQL', need: 'Nice to have', status: 'Missing', change: 'Not added. It is on her Never claim list.', facts: '', lines: [] },
];

export const STATUS_MARK = {
  'On resume': 'full',
  'Moved higher': 'full',
  'Added from facts': 'green',
  'Partial match': 'half',
  Missing: 'none',
};

export const RESUME = {
  summary:
    'Frontend developer with 4+ years of professional experience with React, building web apps and a React Native mobile app for a payments company and a health-tech startup. TypeScript at work since Mar 2024 and in freelance projects since Jan 2023. Builds reusable React components documented in Storybook, improves page performance, and writes unit and end-to-end tests. Also runs a part-time freelance practice building Next.js websites for small businesses. Fluent in English, native Swahili speaker.',
  skills: [
    { id: 'langs', label: 'Languages', text: 'TypeScript, JavaScript (ES6+), HTML5, CSS3, SQL' },
    { id: 'front', label: 'Frontend', text: 'React, Next.js, React Native, Tailwind CSS, Storybook' },
    { id: 'back', label: 'Backend', text: 'Node.js, Express, REST APIs, PostgreSQL' },
    { id: 'tools', label: 'Testing & Tools', text: 'Jest, React Testing Library, Playwright, Lighthouse, Accessibility (WCAG 2.1 AA), Git, GitHub Actions, Vercel, Figma' },
    { id: 'spoken', label: 'Spoken Languages', text: 'English (fluent), Swahili (native), French (basic)' },
  ],
  jobs: [
    {
      org: 'Self-employed', place: 'Remote', title: 'Freelance Frontend Engineer (part-time)', dates: 'Jan 2023 – Present',
      items: [
        ['fr1', 'Built 6 websites for small businesses with Next.js and Tailwind CSS.'],
        ['fr2', 'Used TypeScript in all freelance projects.'],
        ['fr3', 'Set up deployments on Vercel and basic analytics with Plausible.'],
      ],
    },
    {
      org: 'Brightleaf Labs', place: 'Nairobi, Kenya (Hybrid)', title: 'Frontend Developer', dates: 'Mar 2024 – Present',
      items: [
        ['bl1', 'Built and maintained the customer dashboard of a payments web app in React and TypeScript.'],
        ['bl2', 'Built about 15 reusable React components, documented in Storybook.'],
        ['bl3', 'Wrote Playwright end-to-end tests for the sign-up and payment flows.'],
        ['bl4', 'Improved dashboard load time by an estimated 20–30% (Lighthouse lab data) through code splitting and image optimization.'],
        ['bl5', 'Helped migrate the checkout flow from JavaScript to TypeScript, working with two other developers.'],
        ['bl6', 'Mentored 1 intern for 3 months through code reviews and pair programming.'],
      ],
    },
    {
      org: 'Kijiji Health', place: 'Nairobi, Kenya', title: 'Junior Web Developer', dates: 'Jun 2022 – Feb 2024',
      items: [
        ['kh1', 'Built React pages for the clinic admin portal.'],
        ['kh2', 'Wrote unit tests with Jest and React Testing Library.'],
        ['kh3', 'Added endpoints to a Node.js/Express REST API backed by PostgreSQL, reviewed by the backend developer.'],
        ['kh4', 'Built a React Native appointment booking app with about 1,200 monthly active users (mid-2023).'],
      ],
    },
    {
      org: 'Tano Systems', place: 'Nairobi, Kenya', title: 'Software Engineering Intern', dates: 'Jun 2021 – Sep 2021',
      items: [
        ['ts1', 'Fixed accessibility issues in an internal dashboard toward WCAG 2.1 AA (colour contrast, keyboard navigation, form labels).'],
      ],
    },
  ],
};

export const EVALS = [
  { job: 'Good match (Pollen)', kit: 0.96, plain: 0.5 },
  { job: 'Stretch AI role (Relay)', kit: 0.95, plain: 0.5 },
];

export const RULES = [
  ['Reword, reorder, cut, move. Never add.', 'No skill, tool, number, title, date or result that isn’t in your facts.md.'],
  ['No inflation.', '“Helped” stays “helped”. “About 15” stays “about 15”. “An estimated 20–30%” stays an estimated range. “4+ years” covers only the skills you have used for 4+ years.'],
  ['Employer job titles are never changed.', 'Only titles you control (freelance, your own company) may change, and only to alternatives you listed.'],
  ['Bad odds are said out loud.', 'Visa, location, time-zone and language requirements you don’t meet stop the tailoring until you say to go on. Years or seniority you’re short on are reported plainly.'],
  ['Missing stays missing.', 'A requirement your facts don’t support is reported as Missing, never added.'],
  ['A PDF or Word resume is copied word for word first.', 'The plugin checks the LaTeX copy has exactly the same words and links as your file, and you confirm it before any tailoring.'],
];
