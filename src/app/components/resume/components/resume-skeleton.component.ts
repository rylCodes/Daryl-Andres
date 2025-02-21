// resume-skeleton.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-skeleton',
  standalone: true,
  template: `
    <section class="relative w-full mx-auto py-20 bg-slate-50">
      <div class="w-full max-w-7xl mx-auto">
        <!-- Header Skeleton -->
        <div class="heading flex items-center text-slate-800 px-4">
          <div class="h-8 w-32 bg-slate-300 rounded-lg animate-pulse"></div>
          <div class="h-8 w-8 ml-2 bg-slate-300 rounded-lg animate-pulse"></div>
        </div>

        <!-- Skills Section Skeleton -->
        <div class="sub-section p-4 w-full mt-4">
          <div class="h-10 w-full bg-slate-900 mb-4"></div>
          <div
            class="flex flex-col md:flex-row w-full p-4 border shadow-lg space-y-3 md:space-y-0"
          >
            @for(section of [1, 2, 3]; track section) {
            <div class="w-full px-6 md:w-1/3">
              <div
                class="h-6 w-48 bg-slate-300 rounded mb-3 animate-pulse"
              ></div>
              <div class="space-y-2">
                @for(item of [1, 2, 3]; track item) {
                <div class="h-4 w-40 bg-slate-300 rounded animate-pulse"></div>
                }
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Certifications Section Skeleton -->
        <div class="sub-section p-4 w-full mt-4">
          <div class="h-10 w-full bg-slate-900 mb-4"></div>
          <div class="w-full border shadow-lg p-4">
            <div class="flex flex-col md:flex-row w-full gap-4">
              @for(col of [1, 2]; track col) {
              <div class="w-full md:w-1/2 space-y-4">
                @for(cert of [1, 2]; track cert) {
                <div class="w-full">
                  <div
                    class="h-6 w-56 bg-slate-300 rounded mb-3 animate-pulse"
                  ></div>
                  @for(item of [1, 2, 3]; track item) {
                  <div class="flex items-center mb-2">
                    <div
                      class="h-4 w-4/5 bg-slate-300 rounded animate-pulse"
                    ></div>
                    <div class="h-6 w-16 bg-slate-600 rounded ml-2"></div>
                  </div>
                  }
                </div>
                }
              </div>
              }
            </div>
          </div>
        </div>

        <!-- Experience/Education Section Skeleton -->
        <div class="sub-section p-4 w-full mt-4">
          <div class="h-10 w-full bg-slate-900 mb-4"></div>
          <div
            class="flex flex-col md:flex-row w-full border shadow-lg p-4 space-y-4 md:space-y-0 md:space-x-4"
          >
            @for(section of [1, 2]; track section) {
            <div class="w-full md:w-1/2 space-y-4">
              <div class="h-6 w-48 bg-slate-300 rounded animate-pulse"></div>
              @for(item of [1, 2, 3]; track item) {
              <div class="space-y-2">
                <div class="h-5 w-40 bg-slate-300 rounded animate-pulse"></div>
                <div class="h-4 w-56 bg-slate-300 rounded animate-pulse"></div>
                <div class="h-4 w-32 bg-slate-300 rounded animate-pulse"></div>
              </div>
              }
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .heading,
      .sub-section {
        animation: ScrollReveal ease-in-out both;
        animation-timeline: view();
        animation-range: entry 50% cover 40%;
      }

      @keyframes ScrollReveal {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class ResumeSkeletonComponent {}
