import { envelope } from '@icon/solid.icon';
import { github, linkedin } from '@icon/brand.icon';

interface SocialLinkSchema {
  name: string;
  path: string;
  link: string;
  color: string;
}

const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: 'https://github.com/rylCodes',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://www.linkedin.com/in/daryl-andres',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'mailto:darylandres.10@gmail.com?subject=Hi Daryl!',
    color: '#e74c3c',
  },
];

export default socialLinkData;
