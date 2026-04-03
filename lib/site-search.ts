export type SearchEntry = {
  title: string;
  href: string;
  description: string;
  category: string;
  keywords: string[];
  external?: boolean;
};

export const siteSearchEntries: SearchEntry[] = [
  {
    title: 'Home',
    href: '/',
    description: 'Explore Kings and Queens School, our programmes, admissions, and digital learning opportunities.',
    category: 'Overview',
    keywords: ['home', 'school', 'programmes', 'admissions', 'digital learning', 'umuahia'],
  },
  {
    title: 'About Us',
    href: '/about',
    description: 'Read the school history, mission, leadership profile, and board of directors information.',
    category: 'School',
    keywords: ['about', 'history', 'mission', 'board', 'leadership', 'founder', 'vice principal'],
  },
  {
    title: 'Academics',
    href: '/academics',
    description: 'View the academic structure, curriculum direction, and learning pathways across the school.',
    category: 'Academics',
    keywords: ['academics', 'curriculum', 'learning', 'primary', 'secondary', 'teaching'],
  },
  {
    title: 'Examinations',
    href: '/academics/examinations',
    description: 'Learn about examination structure, assessments, and readiness for external exams.',
    category: 'Academics',
    keywords: ['examinations', 'waec', 'neco', 'assessment', 'tests', 'results'],
  },
  {
    title: 'Digital Learning',
    href: '/digital-learning',
    description: 'See how Kings and Queens School blends classroom instruction with digital learning tools.',
    category: 'Digital Learning',
    keywords: ['digital learning', 'technology', 'elearning', 'online lessons', 'smart classroom'],
  },
  {
    title: 'Online School',
    href: '/online-school',
    description: 'Discover the online school experience, live classes, LMS access, and flexible digital learning.',
    category: 'Digital Learning',
    keywords: ['online school', 'virtual learning', 'lms', 'portal', 'distinction', 'virtualsims'],
  },
  {
    title: 'Student Life',
    href: '/student-life',
    description: 'Browse school culture, extracurriculars, events, and the student experience beyond academics.',
    category: 'Life at School',
    keywords: ['student life', 'sports', 'events', 'clubs', 'culture', 'co-curricular'],
  },
  {
    title: 'Admissions',
    href: '/admissions',
    description: 'Start the admissions journey and review entry expectations, process, and next steps.',
    category: 'Admissions',
    keywords: ['admissions', 'apply', 'enrolment', 'enrollment', 'registration', 'entry'],
  },
  {
    title: 'Apply Now',
    href: '/admissions/apply-now',
    description: 'Submit an admission application and begin the school registration process.',
    category: 'Admissions',
    keywords: ['apply', 'application', 'admission form', 'registration', 'enrolment'],
  },
  {
    title: 'Entrance Process',
    href: '/admissions/entrance-process',
    description: 'Review the entrance assessment process, screening steps, and admission requirements.',
    category: 'Admissions',
    keywords: ['entrance exam', 'screening', 'assessment', 'requirements', 'interview'],
  },
  {
    title: 'Fees Payment',
    href: '/admissions/fees-payment',
    description: 'Find school fees guidance, payment options, and related admissions information.',
    category: 'Admissions',
    keywords: ['fees', 'payment', 'tuition', 'school fees', 'billing'],
  },
  {
    title: 'Gallery',
    href: '/gallery',
    description: 'View photos from school life, events, classrooms, and the Kings and Queens community.',
    category: 'Media',
    keywords: ['gallery', 'photos', 'images', 'events', 'campus', 'pictures'],
  },
  {
    title: 'Contact Us',
    href: '/contact',
    description: 'Reach the school for enquiries, location details, and admissions support.',
    category: 'Contact',
    keywords: ['contact', 'phone', 'email', 'address', 'umuahia', 'support'],
  },
  {
    title: 'Parent Portal',
    href: 'https://kqis-portal.vercel.app/',
    description: 'Open the school portal for parent access, results, communication, and school tools.',
    category: 'Portal',
    keywords: ['portal', 'parent portal', 'lms', 'results', 'school management system'],
    external: true,
  },
];

function normalize(value: string) {
  return value.toLowerCase().trim();
}

export function searchSite(query: string) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return siteSearchEntries;
  }

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  return siteSearchEntries
    .map((entry) => {
      const searchableText = normalize(
        [entry.title, entry.description, entry.category, ...entry.keywords].join(' ')
      );

      let score = 0;

      if (normalize(entry.title).includes(normalizedQuery)) {
        score += 12;
      }

      if (normalize(entry.category).includes(normalizedQuery)) {
        score += 8;
      }

      if (normalize(entry.description).includes(normalizedQuery)) {
        score += 5;
      }

      for (const keyword of entry.keywords) {
        if (normalize(keyword).includes(normalizedQuery)) {
          score += 6;
        }
      }

      for (const token of tokens) {
        if (searchableText.includes(token)) {
          score += 2;
        }
      }

      return { entry, score };
    })
    .filter((result) => result.score > 0)
    .sort((left, right) => right.score - left.score || left.entry.title.localeCompare(right.entry.title))
    .map((result) => result.entry);
}
