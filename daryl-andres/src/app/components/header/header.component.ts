import { Component, HostListener, AfterViewInit, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  faBars = faBars;
  faTimes = faTimes;

  isScrolled: boolean = false;
  isNavBarOpen: boolean = false;
  currentSection: string = '#home';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isNavBarOpen = false;
    
    this.isScrolled = window.scrollY > 0;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (window.scrollY > 0) {
        this.isScrolled = true;
        this.cdr.detectChanges();
      };
    }
  }

  scrollTo(target: string): void {
    this.isNavBarOpen = false;

    const elem = document.querySelector(target);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      this.currentSection = target;
    };
  }

  toggleNavBar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }
}
