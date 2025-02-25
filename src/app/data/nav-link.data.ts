export interface NavLinkSchema {
  name: string;
  path: string;
  section?: string;
}

const navlinkData: NavLinkSchema[] = [
  {
    name: 'Home',
    path: '#home',
    section: 'home',
  },
  {
    name: 'About',
    path: '#about',
    section: 'about',
  },
  {
    name: 'Projects',
    path: '#projects',
    section: 'projects',
  },
  // {
  //   name: 'Resume',
  //   path: '#resume',
  //   section: 'resume',
  // },
  {
    name: 'Contact',
    path: '#contact',
    section: 'contact',
  },
];

export default navlinkData;
