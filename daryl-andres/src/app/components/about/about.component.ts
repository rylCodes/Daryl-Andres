import { Component, OnInit, Renderer2 } from '@angular/core';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
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

  ngOnInit(): void {
  }

  toggleLearnMore() {
    this.isLearnMoreClicked = !this.isLearnMoreClicked;
  }
}
