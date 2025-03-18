import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { AboutComponent } from '@components/about/about.component';
import { ContactComponent } from '@components/contact/contact.component';
import { ResumeComponent } from '@components/resume/resume.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { ProjectsSkeletonComponent } from '@components/projects/components/projects-skeleton.component';
import { ResumeSkeletonComponent } from '@components/resume/components/resume-skeleton.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    ProjectsComponent,
    ResumeSkeletonComponent,
  ],
  template: `
    <div class="relative w-full">
      <app-header></app-header>

      <app-hero></app-hero>
      <app-about></app-about>
      <app-projects></app-projects>

      @defer {
        <app-resume></app-resume>
      } @placeholder {
        <app-resume-skeleton></app-resume-skeleton>
      }

      <app-contact></app-contact>

      <app-footer></app-footer>
    </div>
  `,
})
export class PortfolioComponent {}
