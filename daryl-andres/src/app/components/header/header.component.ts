import { Component, HostListener, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
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

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
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
