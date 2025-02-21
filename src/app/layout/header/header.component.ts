import {
  Component,
  HostListener,
  AfterViewInit,
  ChangeDetectorRef,
  PLATFORM_ID,
  computed,
  signal,
  inject,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import navlinkData from '@data/nav-link.data';
import { Icon } from '@shared/components/icon/icon';
import { letterD } from '@icon/brand.icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, FontAwesomeModule, Icon],
  templateUrl: './header.component.html',
  styles: [
    `
      .img-slate-950 {
        filter: invert(7%) sepia(8%) saturate(6720%) hue-rotate(189deg)
          brightness(92%) contrast(95%);
      }

      .img-white {
        filter: invert(88%) sepia(100%) saturate(0%) hue-rotate(256deg)
          brightness(105%) contrast(103%);
      }

      .active {
        border-left: 4px solid #22d3ee;

        @media (min-width: 768px) {
          border-bottom: 3px solid #22d3ee;
          border-left: none;
        }
      }
    `,
  ],
})
export class HeaderComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);
  private elementRef = inject(ElementRef);

  faBars = faBars;
  faTimes = faTimes;
  letterD = letterD;

  links = computed(() => navlinkData);
  iconColor = computed(() =>
    !this.isNavBarOpen() && !this.isScrolled()
      ? 'fill-slate-50 dark:fill-slate-950'
      : 'fill-slate-950 dark:fill-slate-50'
  );

  isScrolled = signal<boolean>(false);
  isNavBarOpen = signal<boolean>(false);
  currentSection: string = '#home';

  activeSection = signal<string>('home');
  indicatorWidth = signal<number>(0);
  indicatorPosition = signal<number>(0);

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isNavBarOpen.set(false);
      this.isScrolled.set(window.scrollY > 0);

      const sections = this.links().map((link) => link.section);

      for (const section of sections) {
        const element = document.getElementById(section as string);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // 100px offset
          if (rect.top <= offset && rect.bottom >= offset) {
            this.activeSection.set(section as string);
            this.updateIndicator();
            break;
          }
        }
      }
    }
  }

  ngOnInit() {
    this.updateIndicator();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (window.scrollY > 0) {
        this.isScrolled.set(true);
        this.cdr.detectChanges();
      }
    }
  }

  scrollTo(target: string): void {
    this.isNavBarOpen.set(false);

    const elem = this.elementRef.nativeElement.querySelector(target);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      this.currentSection = target;
    }
  }

  toggleNavBar() {
    this.isNavBarOpen.set(!this.isNavBarOpen());
  }

  updateIndicator() {
    const activeLink = this.elementRef.nativeElement.querySelector('.active');
    if (activeLink) {
      this.indicatorWidth.set(activeLink.offsetWidth);
      this.indicatorPosition.set(activeLink.offsetLeft);
    }
  }
}
