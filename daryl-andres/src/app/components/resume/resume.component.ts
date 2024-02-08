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
  @ViewChild('certDiv') certDiv!: ElementRef; 

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
  isImageLoaded: boolean = false;

  imgUrl: string = '';
  imgPath: string = '';
  placeholderPath: string = '';

  certImgPath: Certificate = {
    html: '../../../assets/img/certificates/sololearn-html-introduction.png',
    css: '../../../assets/img/certificates/sololearn-css-introduction.png',
    js: '../../../assets/img/certificates/sololearn-js-introduction.png',
    angularNetJs: '../../../assets/img/certificates/sololearn-angular-netjs.png',
    python: '../../../assets/img/certificates/sololearn-python-introduction.png',
    pythonDataStructure: '../../../assets/img/certificates/sololearn-python-data-structure.png',
    responsiveWebDesign: '../../../assets/img/certificates/freecodecamp-responsive-web-design.JPG',
  };

  certURL: Certificate = {
    html: 'https://api2.sololearn.com/v2/certificates/CC-HZXGEPVQ/image/png',
    css: 'https://api2.sololearn.com/v2/certificates/CC-2DUIMSYV/image/png',
    js: 'https://api2.sololearn.com/v2/certificates/CC-WS3UGLYV/image/png',
    angularNetJs: 'https://api2.sololearn.com/v2/certificates/CT-CYNTL353/image/png',
    python: 'https://api2.sololearn.com/v2/certificates/CC-0PAX9KDD/image/png',
    pythonDataStructure: 'https://api2.sololearn.com/v2/certificates/CT-IOJ0VWCC/image/png',
    responsiveWebDesign: 'https://www.freecodecamp.org/certification/fccf25ac698-ea5b-417b-bdb6-59c9ad91fc03/responsive-web-design',
  };

  certPlaceholder: Certificate = {
    html: '../../../assets/img/20px/sololearn-html-introduction.png',
    css: '../../../assets/img/20px/sololearn-css-introduction.png',
    js: '../../../assets/img/20px/sololearn-js-introduction.png',
    angularNetJs: '../../../assets/img/20px/sololearn-angular-netjs.png',
    python: '../../../assets/img/20px/sololearn-python-introduction.png',
    pythonDataStructure: '../../../assets/img/20px/sololearn-python-data-structure.png',
    responsiveWebDesign: '../../../assets/img/20px/freecodecamp-responsive-web-design.jpg',
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  viewCertificate(imgPath: string, imgUrl: string, placeholderPath: string) {
    this.imgPath = imgPath
    this.imgUrl = imgUrl;
    this.placeholderPath = placeholderPath;
    this.certificateOnView = true;
  }

  closeCertificate() {
    this.certificateOnView =false;
    this.imgPath = ''
    this.imgUrl = '';
    this.placeholderPath = '';
    this.isImageLoaded = false;
  }

  onClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('#certDiv')) {
      this.closeCertificate();
    };
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }
}
