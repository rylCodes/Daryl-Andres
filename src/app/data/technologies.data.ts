import { TechToolName } from '@data/models/tech-tool-name.model';

interface Technology {
  name: string;
  icon: TechToolName;
  url?: string;
}

export const frontendTechnologies: Technology[] = [
  {
    name: 'Angular',
    icon: 'Angular',
    url: 'https://angular.dev/',
  },
  {
    name: 'React',
    icon: 'React',
    url: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    icon: 'Next JS',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Vue.js',
    icon: 'Vue',
    url: 'https://vuejs.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'TypeScript',
    icon: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'HTML',
    icon: 'HTML',
    url: 'https://en.wikipedia.org/wiki/HTML',
  },
  {
    name: 'CSS',
    icon: 'CSS',
    url: 'https://en.wikipedia.org/wiki/CSS',
  },
  {
    name: 'JavaScript',
    icon: 'JavaScript',
    url: 'https://en.wikipedia.org/wiki/JavaScript',
  },
];

export const backendTechnologies: Technology[] = [
  {
    name: 'Node.js',
    icon: 'Node JS',
    url: 'https://nodejs.org/en',
  },
  {
    name: 'Strapi',
    icon: 'Strapi',
    url: 'https://strapi.io/',
  },
  {
    name: 'PHP',
    icon: 'PHP',
    url: 'https://www.php.net/',
  },
  {
    name: 'Laravel',
    icon: 'Laravel',
    url: 'https://laravel.com/',
  },
  {
    name: 'Python',
    icon: 'Python',
    url: 'https://www.python.org/',
  },
  {
    name: 'Django',
    icon: 'Django',
    url: 'https://www.djangoproject.com/',
  },
  {
    name: 'MySQL',
    icon: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'PostgreSQL',
    icon: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
  },
];

export const devOpsTechnologies: Technology[] = [
  {
    name: 'Git',
    icon: 'Git',
    url: 'https://git-scm.com/',
  },
  {
    name: 'GitHub',
    icon: 'GitHub',
    url: 'https://github.com/',
  },
  {
    name: 'GitLab',
    icon: 'GitLab',
    url: 'https://about.gitlab.com/',
  },
  {
    name: 'Docker',
    icon: 'Docker',
    url: 'https://www.docker.com/',
  },
  {
    name: 'Azure',
    icon: 'Azure',
    url: 'https://azure.microsoft.com/',
  },
  {
    name: 'Vercel',
    icon: 'Vercel',
    url: 'https://vercel.com/',
  },
];

export const utilityTools: Technology[] = [
  {
    name: 'Postman',
    icon: 'Postman',
    url: 'https://www.postman.com/',
  },
  { name: 'Figma', icon: 'Figma', url: 'https://www.figma.com/' },
  { name: 'Laragon', icon: 'Laragon', url: 'https://laragon.org/' },
];
