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

  isLearnMoreClicked: boolean = false;
  isImageLoaded: boolean = false;

  index: number = 0;

  images: ImageList[] = [
    {
      title: '2023 Negosyo Forum - Antipolo City Gov',
      src: '../../../assets/img/nf2.jpeg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: '2023 Negosyo Forum - Antipolo City Gov',
      src: '../../../assets/img/nf1.jpeg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: '2023 Negosyo Forum - Antipolo City Gov',
      src: '../../../assets/img/nf3.jpeg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: 'Kasabalikat Sa Kabuhayan Program - SM Foundation',
      src: '../../../assets/img/ksk1.jpg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: 'Kasabalikat Sa Kabuhayan Program - SM Foundation',
      src: '../../../assets/img/ksk2.jpg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: 'Local Peace Engagement - 80th Infantry (STEADFAST) Batallion',
      src: '../../../assets/img/lpe1.jpg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
    {
      title: 'Local Peace Engagement - 80th Infantry (STEADFAST) Batallion',
      src: '../../../assets/img/lpe2.jpg',
      reference: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
    },
  ];

  currentImage!: ImageList;

  imagesTotalWidth: string = `${this.images.length *100}%`;

  ngOnInit(): void {
    this.currentImage = this.images[this.index];
  }

  toggleLearnMore() {
    this.isLearnMoreClicked = !this.isLearnMoreClicked;
  }

  nextImage() {
    if (this.index < (this.images.length - 1)) {
      this.index += 1;
      this.currentImage = this.images[this.index];
    } else {
      this.index = 0;
      this.currentImage = this.images[this.index];
    };
  }

  previousImage() {
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
