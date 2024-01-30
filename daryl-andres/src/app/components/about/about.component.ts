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

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadWistiaVideos();
  }

  loadWistiaVideos() {
    const script1 = this.renderer.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/jpnvqur43w.jsonp';
    script1.async = true;
    this.renderer.appendChild(document.body, script1);

    const script2 = this.renderer.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js'
    script2.async = true;
    this.renderer.appendChild(document.body, script2);
  }

  toggleLearnMore() {
    this.isLearnMoreClicked = !this.isLearnMoreClicked;
  }
}
