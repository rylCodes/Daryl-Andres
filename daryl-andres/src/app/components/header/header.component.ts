import { Component, HostListener, OnInit, Renderer2, ElementRef } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;

  isScrolled: boolean = false;
  isNavBarOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isNavBarOpen = false;
    
    this.isScrolled = window.scrollY > 0;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (window.scrollY > 0) {
      this.isScrolled = true;
    };
  }

  scrollTo(target: string): void {
    this.isNavBarOpen = false;

    const elem = document.querySelector(target);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    };
  }

  toggleNavBar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }
}
