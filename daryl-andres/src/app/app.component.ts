import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { AboutComponent } from '@components/about/about.component';
import { ContactComponent } from '@components/contact/contact.component';
import { ResumeComponent } from '@components/resume/resume.component';
import { ProjectsComponent } from '@components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    ProjectsComponent,
  ],
  template: `
    <div class="relative w-full">
      <app-header></app-header>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-resume></app-resume>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {}
