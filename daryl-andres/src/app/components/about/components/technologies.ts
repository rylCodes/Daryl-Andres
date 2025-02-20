import { Component, computed, inject } from '@angular/core';
import {
  backendTechnologies,
  devOpsTechnologies,
  frontendTechnologies,
  utilityTools,
} from '@data/technologies.data';
import { Devicon } from '@shared/components/devicon/devicon';

@Component({
  selector: 'about-technologies',
  standalone: true,
  imports: [Devicon],
  template: `
    <div class="w-full my-12 max-w-6xl mx-auto">
      <h3
        class="scroll-reveal font-extrabold text-2xl text-slate-800 md:text-3xl"
      >
        Technologies I've worked with
      </h3>
      <!-- FRONTEND / BACKEND -->
      <div
        class="flex flex-col space-x-0 space-y-4 w-full mt-6 md:flex-row md:space-x-4 md:space-y-0"
      >
        <!-- Frontend -->
        <div class="w-full shadow-md border scroll-reveal md:w-1/2">
          <h4 class="bg-slate-900 text-slate-50 p-1 text-center font-bold">
            FRONTEND
          </h4>
          <div class="flex flex-wrap justify-center items-center gap-4 p-4">
            @for (technology of frontendTechnologies(); track $index) {
            <a [href]="technology.url" target="_blank">
              <devicon
                [name]="technology.icon"
                [key]="$index"
                cssClass="w-14 rounded-md"
              />
            </a>
            }
          </div>
        </div>
        <!-- Backend -->
        <div class="w-full shadow-md border scroll-reveal md:w-1/2">
          <h4 class="bg-slate-900 text-slate-50 p-1 text-center font-bold">
            BACKEND
          </h4>
          <div class="flex flex-wrap justify-center items-center gap-4 p-4">
            @for (technology of backendTechnologies(); track $index) {
            <a [href]="technology.url" target="_blank">
              <devicon
                [name]="technology.icon"
                [key]="$index"
                cssClass="w-14 rounded-md"
            /></a>
            }
          </div>
        </div>
      </div>
      <!-- DEVOPS / TOOLS -->
      <div
        class="flex flex-col space-x-0 space-y-4 w-full mt-4 md:flex-row md:space-x-4 md:space-y-0"
      >
        <div class="w-full shadow-md border scroll-reveal md:w-1/2">
          <h4 class="bg-slate-900 text-slate-50 p-1 text-center font-bold">
            DEVOPS
          </h4>
          <div class="flex flex-wrap justify-center items-center gap-4 p-4">
            @for (technology of devOpsTechnologies(); track $index) {
            <a [href]="technology.url" target="_blank">
              <devicon
                [name]="technology.icon"
                [key]="$index"
                cssClass="w-14 rounded-md"
              />
            </a>
            }
          </div>
        </div>
        <div class="w-full shadow-md border scroll-reveal md:w-1/2">
          <h4 class="bg-slate-900 text-slate-50 p-1 text-center font-bold">
            TOOLS
          </h4>
          <div class="flex flex-wrap justify-center items-center gap-4 p-4">
            @for (technology of tools(); track $index) {
            <a [href]="technology.url" target="_blank">
              <devicon
                [name]="technology.icon"
                [key]="$index"
                cssClass="w-14 rounded-md"
              />
            </a>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .tech-icon {
        position: relative;
      }

      .tech-icon:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }

      .tech-icon .tooltip {
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
        visibility: hidden;
        opacity: 0;
        color: white;
        font-size: 12px;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #1e293b;
        transition: all 500ms;
        z-index: 1;
      }

      .tech-icon .tooltip::after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #1e293b transparent;
      }
    `,
  ],
})
export class TechnologiesComponent {
  frontendTechnologies = computed(() => frontendTechnologies);
  backendTechnologies = computed(() => backendTechnologies);
  devOpsTechnologies = computed(() => devOpsTechnologies);
  tools = computed(() => utilityTools);
}
