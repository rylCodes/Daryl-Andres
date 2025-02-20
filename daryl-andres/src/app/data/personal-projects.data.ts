import { Project } from './models/project.model';

export const projectsData: Project[] = [
  {
    title: 'DescriptorSearch',
    description:
      'This platform is a user-friendly, static web app initially developed to assist DTI-Rizal Negosyo Center Business Counsellors in simplifying the search process for PSIC Descriptors.',
    tools: [{ name: 'NextJS, Typescript' }, { name: 'Tailwindcss, Shadcn UI' }],
    links: {
      site: 'https://descriptorsearch.vercel.app/',
      github: 'https://github.com/rylCodes/bn-descriptors',
    },
    image: {
      src: '../../../assets/img/descriptor.png',
      alt: 'descriptorsearch sample photo',
    },
  },
  {
    title: 'RylFlix',
    description:
      'RylFlix is a movie streaming web app. It allows users to search and watch movies using a simple and user-friendly interface.',
    tools: [{ name: 'Vue' }, { name: 'Tailwindcss' }],
    links: {
      site: 'https://rylflix.netlify.app/',
      github: 'https://github.com/rylCodes/RylFlix',
    },
    image: {
      src: '../../../assets/img/rylflix.png',
      alt: 'RylFlix sample photo',
    },
  },
  {
    title: 'Citycon Website',
    description:
      "Citycon is a construction company based in Cainta, Rizal. This website showcases the Citycon's services and projects using a modern and responsive design.",
    tools: [{ name: 'NextJS, Typescript' }, { name: 'Tailwindcss, Shadcn UI' }],
    links: {
      site: 'https://citycon.vercel.app/',
      github: 'https://github.com/rylCodes/citycon',
    },
    image: {
      src: '../../../assets/img/citycon.png',
      alt: 'citycon sample photo',
    },
  },
  {
    title: 'Invenia+',
    description:
      'Invenia+ is my first Angular project. An inventory management system with POS. Future plans include online payment integration for enhanced functionality.',
    tools: [
      { name: 'Angular, Typescript' },
      { name: 'Django, Python' },
      { name: 'Tailwindcss' },
      { name: 'Postgresql' },
    ],
    links: {
      site: 'https://invenia.darylandres.com/',
      github: 'https://github.com/rylCodes/Inventory-Management-System',
    },
    image: {
      src: '../../../assets/img/invenia.png',
      alt: 'invenia sample photo',
    },
  },
  {
    title: 'QRLink',
    description:
      "I built this using a JavaScript library for QR code customization and a third-party API for URL shortening, enabling efficient generation and customization of QR codes. I developed this tool specifically for customized QR codes on DTI-Rizal's training posters.",
    tools: [{ name: 'HTML, CSS, JavaScript' }, { name: 'Tailwindcss' }],
    links: {
      site: 'https://qrlink-maker.darylandres.com/',
      github: 'https://github.com/rylCodes/qrcode-generator',
    },
    image: {
      src: '../../../assets/img/qrlink.png',
      alt: 'qrlink sample photo',
    },
  },
  {
    title: 'NC Antipolo Portal',
    description:
      'This website is a mock/prototype derived from the official DTI Negosyo Center Online portal, but exclusively for Negosyo Center in Antipolo. It is designed for demonstration purposes, showcasing skills in design and conceptualization, and does not represent a fully operational system.',
    tools: [
      { name: 'HTML, CSS, JavaScript' },
      { name: 'Tailwindcss' },
      { name: 'Django, Python' },
    ],
    links: {
      site: 'https://negosyocenter-antipolo.azurewebsites.net/',
      github: 'https://github.com/rylCodes/nc-antipolo-website',
    },
    image: {
      src: '../../../assets/img/ncantipolo.png',
      alt: 'nc antipolo portal sample photo',
    },
  },
];
