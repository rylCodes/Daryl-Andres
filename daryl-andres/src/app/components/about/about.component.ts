import { Component, computed, OnInit, Renderer2 } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { ImageList } from '../../interface/about';
import { TechnologiesComponent } from './components/technologies';
import { NgClass, NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { previousJobImages } from '@data/previous-job-images.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TechnologiesComponent, NgClass, FontAwesomeModule, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  isLearnMoreClicked: boolean = false;
  isImageLoaded: boolean = false;

  index: number = 0;

  currentImage!: ImageList;
  imgSrc = '';

  ngOnInit(): void {
    this.currentImage = previousJobImages[this.index];
  }

  toggleLearnMore() {
    this.isLearnMoreClicked = !this.isLearnMoreClicked;
  }

  nextImage() {
    this.isImageLoaded = false;
    this.imgSrc = '';

    if (this.index < previousJobImages.length - 1) {
      this.index += 1;
      this.currentImage = previousJobImages[this.index];
    } else {
      this.index = 0;
      this.currentImage = previousJobImages[this.index];
    }

    this.imgSrc = this.currentImage.src;
  }

  previousImage() {
    this.isImageLoaded = false;

    if (this.index > 0) {
      this.index -= 1;
      this.currentImage = previousJobImages[this.index];
    } else {
      this.index = previousJobImages.length - 1;
      this.currentImage = previousJobImages[this.index];
    }
  }

  scrollToSection(target: string) {
    this.isLearnMoreClicked = true;

    setTimeout(() => {
      const elem = document.querySelector(target);
      if (this.isLearnMoreClicked) {
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }
}
