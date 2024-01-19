import { Component } from '@angular/core';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
}
