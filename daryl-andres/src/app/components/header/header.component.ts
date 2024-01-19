import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  scrollTo(target: string): void {
    const elem = document.querySelector(target);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
