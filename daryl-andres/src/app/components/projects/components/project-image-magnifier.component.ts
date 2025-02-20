import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-image-magnifier',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative overflow-hidden h-full"
      #container
      (mousemove)="onMouseMove($event)"
      (mouseleave)="isHovering = false"
    >
      <img
        [src]="src"
        [alt]="alt"
        class="w-full h-full object-cover aspect-video transition-all duration-500"
        [class.scale-125]="isHovering"
        [class.opacity-100]="isLoaded"
        [class.opacity-0]="!isLoaded"
        (load)="onImageLoad()"
        loading="lazy"
        #image
      />

      <div
        *ngIf="isHovering"
        [style.left.px]="magnifierX"
        [style.top.px]="magnifierY"
        class="pointer-events-none absolute w-32 h-32 border-2 border-white/20 rounded-full bg-slate-50/10"
      ></div>
    </div>
  `,
})
export class ProjectImageMagnifierComponent {
  @Input() src!: string;
  @Input() alt!: string;

  @ViewChild('container') containerRef!: ElementRef;

  isHovering = false;
  isLoaded = false;
  magnifierX = 0;
  magnifierY = 0;

  onMouseMove(event: MouseEvent) {
    this.isHovering = true;

    const container = this.containerRef.nativeElement;
    const rect = container.getBoundingClientRect();

    this.magnifierX = event.clientX - rect.left - 64;
    this.magnifierY = event.clientY - rect.top - 64;
  }

  onImageLoad() {
    this.isLoaded = true;
  }
}
