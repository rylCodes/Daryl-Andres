import {
  Component,
  type AfterViewInit,
  ViewChildren,
  type QueryList,
  ElementRef,
} from '@angular/core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projectsData } from '@data/personal-projects.data';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('projectImage') projectImages!: QueryList<ElementRef>;

  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faGithub = faGithub;

  projects = projectsData;
  isImageLoaded = false;

  ngAfterViewInit() {
    this.projectImages.forEach((imgRef) => {
      this.magnify(imgRef.nativeElement, 1.5);
    });
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }

  private magnify(imgElement: HTMLImageElement, zoom: number) {
    const glass = document.createElement('div');
    glass.setAttribute('class', 'img-magnifier-glass');

    imgElement.parentElement?.insertBefore(glass, imgElement);

    glass.style.backgroundImage = `url('${imgElement.src}')`;
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize = `${imgElement.width * zoom}px ${
      imgElement.height * zoom
    }px`;

    const w = glass.offsetWidth / 2;
    const h = glass.offsetHeight / 2;

    imgElement.addEventListener('mouseenter', (e) => {
      glass.style.display = 'block';
      moveMagnifier(e);
    });

    imgElement.addEventListener('mouseleave', () => {
      glass.style.display = 'none';
    });

    glass.addEventListener('mousemove', moveMagnifier);
    imgElement.addEventListener('mousemove', moveMagnifier);
    glass.addEventListener('touchmove', moveMagnifier);
    imgElement.addEventListener('touchmove', moveMagnifier);

    function moveMagnifier(e: MouseEvent | TouchEvent) {
      e.preventDefault();
      const pos = getCursorPos(e);
      let x = pos.x;
      let y = pos.y;

      x = Math.min(Math.max(x, w), imgElement.width - w);
      y = Math.min(Math.max(y, h), imgElement.height - h);

      glass.style.left = `${x - w}px`;
      glass.style.top = `${y - h}px`;

      glass.style.backgroundPosition = `-${x * zoom - w}px -${y * zoom - h}px`;
    }

    function getCursorPos(e: MouseEvent | TouchEvent): {
      x: number;
      y: number;
    } {
      const rect = imgElement.getBoundingClientRect();
      let x = 0,
        y = 0;

      if (e instanceof MouseEvent) {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      } else if (e instanceof TouchEvent) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      }

      return { x, y };
    }
  }
}
