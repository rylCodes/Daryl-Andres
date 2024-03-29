import { Component, OnInit, Renderer2 } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ImageList } from '../../interface/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight

  isLearnMoreClicked: boolean = false;;
  isImageLoaded: boolean = false;

  index: number = 0;

  currentImage!: ImageList;
  imgSrc = '';

  images: ImageList[] = [
    {
      title: '2023 Negosyo Forum - Antipolo City Gov',
      src: '../../../assets/img/nf2.jpeg',
      placeholder: '../../../assets/img/20px/nf2_sm.jpeg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: '2023 Negosyo Forum - Antipolo City Gov',
      src: '../../../assets/img/nf1.jpeg',
      placeholder: '../../../assets/img/20px/nf1_sm.jpeg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: '2023 Negosyo Forum - Antipolo City Gov',
      src: '../../../assets/img/nf3.jpeg',
      placeholder: '../../../assets/img/20px/nf3_sm.jpeg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: 'Kasabalikat Sa Kabuhayan Program - SM Foundation',
      src: '../../../assets/img/ksk1.jpg',
      placeholder: '../../../assets/img/20px/ksk1_sm.jpg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: 'Kasabalikat Sa Kabuhayan Program - SM Foundation',
      src: '../../../assets/img/ksk2.jpg',
      placeholder: '../../../assets/img/20px/ksk2_sm.jpg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: 'Local Peace Engagement - 80th Infantry (STEADFAST) Batallion',
      src: '../../../assets/img/lpe1.jpg',
      placeholder: '../../../assets/img/20px/lpe1_sm.jpg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: 'Local Peace Engagement - 80th Infantry (STEADFAST) Batallion',
      src: '../../../assets/img/lpe2.jpg',
      placeholder: '../../../assets/img/20px/lpe2_sm.jpg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
  ];

  ngOnInit(): void {
    this.currentImage = this.images[this.index];
  }

  toggleLearnMore() {
    this.isLearnMoreClicked = !this.isLearnMoreClicked;
  }

  nextImage() {
    this.isImageLoaded = false;
    this.imgSrc = '';

    if (this.index < (this.images.length - 1)) {
      this.index += 1;
      this.currentImage = this.images[this.index];
    } else {
      this.index = 0;
      this.currentImage = this.images[this.index];
    };

    this.imgSrc = this.currentImage.src
  }

  previousImage() {
    this.isImageLoaded = false;

    if (this.index > 0) {
      this.index -= 1;
      this.currentImage = this.images[this.index];
    } else {
      this.index = this.images.length - 1;
      this.currentImage = this.images[this.index];
    };
  }

  gotToExperience(target: string) {
    this.isLearnMoreClicked = true;

    setTimeout(() => {
      const elem = document.querySelector(target);
      if (this.isLearnMoreClicked) {
        if (elem) {
          elem.scrollIntoView({behavior: 'smooth'});
        };
      }
    }, 100);
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }
}
