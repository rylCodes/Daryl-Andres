import { Component, OnInit, Renderer2 } from '@angular/core';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ImageList } from '../../interface/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  faCircleChevronLeft = faCircleChevronLeft
  faCircleChevronRight =faCircleChevronRight

  isLearnMoreClicked: boolean = false;

  images: ImageList[] = [
    {
      description: '2023 Negosyo Forum - Antipolo City' ,
      src: '../../../assets/img/nf2.jpeg' ,
      url: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
      display: 'block',
    },
    {
      description: '2023 Negosyo Forum - Antipolo City' ,
      src: '../../../assets/img/nf1.jpeg' ,
      url: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
      display: 'block'
    },
    {
      description: '2023 Negosyo Forum - Antipolo City' ,
      src: '../../../assets/img/nf3.jpeg' ,
      url: 'https://www.dti.gov.ph/regions/region-4a/region-4a-news/dti-rizal-engages-2023-negosyo-forum-foster-economic-resilience-antipolo-city/',
      display: 'block'
    },
  ];

  imagesTotalWidth: string = `${this.images.length *100}%`;

  ngOnInit(): void {
    console.log(this.imagesTotalWidth);
  }

  toggleLearnMore() {
    this.isLearnMoreClicked = !this.isLearnMoreClicked;
  }
}
