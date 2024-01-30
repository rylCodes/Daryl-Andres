import { Component, HostListener, OnInit, Renderer2, ElementRef } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faXmark = faXmark;

  isScrolled: boolean = false;
  isNavBarOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    if (this.isNavBarOpen) {
      this.isNavBarOpen = false;
    };
    
    this.isScrolled = window.scrollY > 0;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    
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
