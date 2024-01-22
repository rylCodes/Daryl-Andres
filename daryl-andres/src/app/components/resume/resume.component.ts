import { Component } from '@angular/core';
import { faImage, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  faImage = faImage;
  faDownload = faDownload;
}
