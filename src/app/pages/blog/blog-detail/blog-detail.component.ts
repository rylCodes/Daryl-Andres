import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { toHTML } from '@portabletext/to-html';
import { SanityService } from '@services/sanity/sanity.service';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent implements OnInit {
  private sanityService = inject(SanityService);
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);

  id: any;
  postDataContent: any;
  constructor() {
    this.id = this.route.snapshot.params['slug'];
  }
  postData: any;
  faArrowLeft = faArrowLeft;
  faHome = faHome;

  defaultImageURL =
    'https://cdn.sanity.io/images//production/f2618421dbd6de2a63ddea363195fbab8f41afc5-3543x2365.jpg';

  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageURL;
  }

  ngOnInit() {
    this.getPost(this.id);
  }

  async getPost(id: string) {
    this.postData = await this.sanityService.getSpecificPost(id);
    this.postDataContent = toHTML(this.postData.content);

    if (this.postData) {
      this.titleService.setTitle(`Daryl | ${this.postData.title}`);
    }
    return this.postData;
  }
}
