// projects-skeleton.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-skeleton',
  standalone: true,
  template: `
    <!-- Projects grid skeleton -->
    <div class="grid gap-12">
      @for (item of [1, 2, 3]; track item) {
        <div
          class="sub-section bg-slate-800 rounded-xl overflow-hidden shadow-lg"
        >
          <div class="flex flex-col md:flex-row">
            <!-- Image skeleton -->
            <div
              class="w-full md:w-1/2 aspect-video bg-slate-700 animate-pulse"
            ></div>

            <!-- Content skeleton -->
            <div class="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <!-- Title skeleton -->
              <div
                class="h-8 bg-slate-700 rounded-lg w-3/4 mb-4 animate-pulse"
              ></div>

              <!-- Description skeleton -->
              <div class="space-y-2 mb-6">
                <div
                  class="h-4 bg-slate-700 rounded w-full animate-pulse"
                ></div>
                <div class="h-4 bg-slate-700 rounded w-5/6 animate-pulse"></div>
                <div class="h-4 bg-slate-700 rounded w-4/6 animate-pulse"></div>
              </div>

              <!-- Tools skeleton -->
              <div>
                <div
                  class="h-6 bg-slate-700 rounded w-40 mb-2 animate-pulse"
                ></div>
                <div class="flex flex-wrap gap-2">
                  @for (tool of [1, 2, 3, 4]; track tool) {
                    <div
                      class="h-6 w-20 bg-slate-700 rounded-full animate-pulse"
                    ></div>
                  }
                </div>
              </div>

              <!-- Buttons skeleton -->
              <div class="flex gap-4 mt-6">
                <div
                  class="flex-1 h-12 bg-slate-700 rounded-md animate-pulse"
                ></div>
                <div
                  class="flex-1 h-12 bg-slate-700 rounded-md animate-pulse"
                ></div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [
    `
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
export class ProjectsSkeletonComponent {}
