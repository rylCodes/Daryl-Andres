import { Component, OnInit, ElementRef, Renderer2, ViewChild, HostListener } from '@angular/core';
import { faImage, faDownload, faTimes, faCertificate, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Certificate } from '../../interface/certificate';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
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
  faFileArrowDown = faFileArrowDown;

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
    staticWebsite: '../../../assets/img/certificates/dict-lms-static-website.png',
    basicJS: '../../../assets/img/certificates/dict-lms-javascript-basic.png',
    flask: '../../../assets/img/certificates/dict-lms-flask-python.png',
    pythonIntermediate: '../../../assets/img/certificates/dict-lms-python-intermediate.png',
    pythonBeginner: '../../../assets/img/certificates/dict-lms-python-beginner.png',
  };

  certURL: Certificate = {
    html: 'https://api2.sololearn.com/v2/certificates/CC-HZXGEPVQ/image/png',
    css: 'https://api2.sololearn.com/v2/certificates/CC-2DUIMSYV/image/png',
    js: 'https://api2.sololearn.com/v2/certificates/CC-WS3UGLYV/image/png',
    angularNetJs: 'https://api2.sololearn.com/v2/certificates/CT-CYNTL353/image/png',
    python: 'https://api2.sololearn.com/v2/certificates/CC-0PAX9KDD/image/png',
    pythonDataStructure: 'https://api2.sololearn.com/v2/certificates/CT-IOJ0VWCC/image/png',
    responsiveWebDesign: 'https://www.freecodecamp.org/certification/fccf25ac698-ea5b-417b-bdb6-59c9ad91fc03/responsive-web-design',
    staticWebsite: 'https://courses.buri.io/view/user/certificate/2d224488-7d2c-44b9-8cc3-66d4814aa056/pdf',
    basicJS: 'https://courses.buri.io/view/user/certificate/bd35c116-3e23-4e76-a65a-651e608660fb/pdf',
    flask: 'https://courses.buri.io/view/user/certificate/44d1b505-fffa-4ad2-91a1-7024c9eeaf62/pdf',
    pythonIntermediate: 'https://courses.buri.io/view/user/certificate/4959adde-9e13-4777-baf3-3cfc8be078a8/pdf',
    pythonBeginner: 'https://courses.buri.io/view/user/certificate/34e7220b-7d25-4aa2-8e1b-9d68f15432f6/pdf',
  };

  certPlaceholder: Certificate = {
    html: '../../../assets/img/20px/sololearn-html-introduction.png',
    css: '../../../assets/img/20px/sololearn-css-introduction.png',
    js: '../../../assets/img/20px/sololearn-js-introduction.png',
    angularNetJs: '../../../assets/img/20px/sololearn-angular-netjs.png',
    python: '../../../assets/img/20px/sololearn-python-introduction.png',
    pythonDataStructure: '../../../assets/img/20px/sololearn-python-data-structure.png',
    responsiveWebDesign: '../../../assets/img/20px/freecodecamp-responsive-web-design.jpg',
    staticWebsite: '../../../assets/img/20px/dict-lms-static-website.png',
    basicJS: '../../../assets/img/20px/dict-lms-javascript-basic.png',
    flask: '../../../assets/img/20px/dict-lms-flask-python.png',
    pythonIntermediate: '../../../assets/img/20px/dict-lms-python-intermediate.png',
    pythonBeginner: '../../../assets/img/20px/dict-lms-python-beginner.png',
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  viewCertificate(imgPath: string, imgUrl: string, placeholderPath: string) {
    this.isImageLoaded = false;
    this.placeholderPath = placeholderPath;
    this.imgPath = imgPath
    this.imgUrl = imgUrl;
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
