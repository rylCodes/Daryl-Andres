import { Component } from '@angular/core';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faCircleChevronLeft = faCircleChevronLeft
  faCircleChevronRight =faCircleChevronRight

  isLearnMoreClicked: boolean = false;

  imgSrcArr: string[] = [
    '../../../assets/img/nf2.jpeg',
    '../../../assets/img/nf1.jpeg',
    '../../../assets/img/nf3.jpeg',
    '../../../assets/img/ksk2.jpeg',
    '../../../assets/img/ksk1.jpeg',
    '../../../assets/img/lpe1.jpeg',
    '../../../assets/img/lpe2.jpeg',
  ]

  imgSrc: string = this.imgSrcArr[0];

  toggleLearnMore() {
    this.isLearnMoreClicked = !this.isLearnMoreClicked;
  }
}
