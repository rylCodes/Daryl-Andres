import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener,
  computed,
} from '@angular/core';
import {
  faImage,
  faDownload,
  faTimes,
  faCertificate,
  faFileArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  dictCertificates,
  freeCodeCampCertificates,
  sololearnCertificates,
  udemyCertificates,
} from '@data/certificates.data';
import { TooltipDirective } from '@shared/components/tooltip/tooltip.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [TooltipDirective, FontAwesomeModule, NgClass],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  @ViewChild('certDiv') certDiv!: ElementRef;

  @HostListener('document:keyup.escape', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.certificateOnView) {
        this.closeCertificate();
      }
    }
  }

  faImage = faImage;
  faDownload = faDownload;
  faTimes = faTimes;
  faCertificate = faCertificate;
  faFileArrowDown = faFileArrowDown;

  certificateOnView: boolean = false;
  isImageLoaded: boolean = false;

  imgUrl: string = '';
  imgPath: string = '';
  placeholderPath: string = '';

  dictCertificates = computed(() => dictCertificates);
  freeCodeCampCertificates = computed(() => freeCodeCampCertificates);
  soloLearnCertificates = computed(() => sololearnCertificates);
  udemyCertificates = computed(() => udemyCertificates);

  ngOnInit(): void {}

  viewCertificate(imgPath: string, imgUrl: string, placeholderPath: string) {
    this.isImageLoaded = false;
    this.placeholderPath = placeholderPath;
    this.imgPath = imgPath;
    this.imgUrl = imgUrl;
    this.certificateOnView = true;
  }

  closeCertificate() {
    this.certificateOnView = false;
    this.imgPath = '';
    this.imgUrl = '';
    this.placeholderPath = '';
    this.isImageLoaded = false;
  }

  onClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('#certDiv')) {
      this.closeCertificate();
    }
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }
}
