import { Component, computed } from '@angular/core';
import socialLinkData from '@data/social-link.data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@shared/components/icon/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, Icon],
  template: `
    <div
      class="flex flex-col justify-center items-center bg-slate-950 w-full text-slate-50 py-12"
    >
      <ul class="flex justify-center items-center space-x-4 mb-4">
        @for (socialLink of socialLinks(); track $index) {
        <li
          class="rounded-md px-2 py-1 bg-slate-900 transition-all duration-300 hover:scale-[1.1]"
        >
          <a [href]="socialLink.link" target="_blank">
            <icon
              [iconClass]="'fill-current fill-slate-50 dark:fill-slate-950'"
              [path]="socialLink.path"
            />
          </a>
        </li>
        }
      </ul>
      <div>Copyright &copy; {{ currentYear() }} - All rights reserved.</div>
      <div>Designed and built by Daryl Andres</div>
    </div>
  `,
  styles: [
    `
      a {
        transition: all;
        transition-duration: 0.3s;

        &:hover {
          background-color: white;

          fa-icon {
            color: #030712;
          }
        }
      }
    `,
  ],
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faCode = faCode;

  socialLinks = computed(() => socialLinkData);
  currentYear = computed(() => new Date().getFullYear());
}
