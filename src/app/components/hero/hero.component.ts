import { NgClass } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgClass],
  template: `
    <section
      id="home"
      class="relative w-full mx-auto min-h-svh max-h-[59rem] flex items-center justify-center sm:h-svh sm:min-h-max"
    >
      <div
        class="container max-w-7xl mx-auto px-4 py-[6.25rem] flex flex-col justify-between items-center gap-6 w-full h-full md:flex-row md:py-20 md:gap-12"
      >
        <!-- Left Content -->
        <div class="w-full mt-6 md:w-1/2 text-slate-50 sm:mt-0">
          <p class="text-lg md:text-xl opacity-0 slide-in-one">
            Hi, my name is
          </p>
          <h1
            class="text-4xl md:text-6xl font-bold mt-2 opacity-0 slide-in-two"
          >
            DARYL ANDRES
          </h1>
          <p class="text-xl md:text-2xl mt-4 opacity-0 slide-in-three">
            A self-taught
            <span class="font-bold text-cyan-400">Web Developer</span>
          </p>
          <div
            class="flex flex-col gap-2 mt-6 fade-in opacity-0 sm:gap-4 sm:flex-row"
          >
            <a
              class="bg-slate-50 text-slate-900 hover:scale-105 transition-all duration-500 block py-4 px-6 rounded-lg font-semibold border-2 border-white w-full text-center text-nowrap lg:px-12 md:w-fit"
              href="#contact"
            >
              CONTACT ME
            </a>
            <button
              class="hover:scale-105 transition-all duration-500 block py-4 px-6 rounded-lg font-semibold border-2 border-white w-full text-center text-nowrap lg:px-12 md:w-fit"
              href="#resume"
              (click)="navigateToResumeAndOpenCV()"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <!-- Right Content (Image) -->
        <div class="w-full md:w-1/2">
          <img
            class="transition-all duration-1000 opacity-0 w-full object-cover mix-blend-overlay aspect-square rounded-full shadow-2xl z-10 max-w-[600px] mx-auto"
            src="../../../assets/img/dma.png"
            alt="photo of Daryl Andres"
            width="500"
            height="500"
            priority
            [ngClass]="{ 'opacity-100': isImageLoaded }"
            (load)="onImageLoad()"
          />
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  isImageLoaded: boolean = false;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {}

  navigateToResumeAndOpenCV(): void {
    const hash = window.location.hash;

    if (isPlatformBrowser(this.platformId)) {
      window.location.hash = '#resume';

      if (hash === '#resume') {
        window.open('../../../assets/daryl-andres-cv.pdf', '_blank');
      } else {
        setTimeout(() => {
          window.open('../../../assets/daryl-andres-cv.pdf', '_blank');
        }, 1500);
      }
    }
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }
}
