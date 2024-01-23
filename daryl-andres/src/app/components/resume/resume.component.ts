import { Component, OnInit, ElementRef, Renderer2, ViewChild, HostListener } from '@angular/core';
import { faImage, faDownload, faTimes, faCertificate } from '@fortawesome/free-solid-svg-icons';

interface Certificate {
  html: string;
  css: string;
  js: string;
  angularNetJs: string;
  python: string;
  pythonDataStructure: string;
  responsiveWebDesign: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'] // Corrected property name to styleUrls
})
export class ResumeComponent implements OnInit {
  @ViewChild('certificateImg', {static: false}) certificateImg!: ElementRef;

  @HostListener('document:keyup.escape', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.certificateOnView) {
        this.closeCertificate();
      }
    };
  }

  faImage = faImage;
  faDownload = faDownload;
  faTimes = faTimes;
  faCertificate = faCertificate;

  certificateOnView: boolean = false;

  certUrl: string = '';

  webCertificates: Certificate = {
    html: 'https://api2.sololearn.com/v2/certificates/CC-HZXGEPVQ/image/png',
    css: 'https://api2.sololearn.com/v2/certificates/CC-2DUIMSYV/image/png',
    js: 'https://api2.sololearn.com/v2/certificates/CC-WS3UGLYV/image/png',
    angularNetJs: 'https://api2.sololearn.com/v2/certificates/CT-CYNTL353/image/png',
    python: 'https://api2.sololearn.com/v2/certificates/CC-0PAX9KDD/image/png',
    pythonDataStructure: 'https://api2.sololearn.com/v2/certificates/CT-IOJ0VWCC/image/png',
    responsiveWebDesign: 'https://www.freecodecamp.org/certification/fccf25ac698-ea5b-417b-bdb6-59c9ad91fc03/responsive-web-design',
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  viewCertificate(imgUrl: string) {
    this.certUrl = imgUrl;
    this.certificateOnView = true;
    console.log("click works!")
  }

  closeCertificate() {
    this.certificateOnView =false;
    this.certUrl = '';
  }
}
