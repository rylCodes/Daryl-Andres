import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SanityService } from '@services/sanity/sanity.service';
import {
  faArrowUpRightFromSquare,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  sanityService = inject(SanityService);
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faHome = faHome;
  posts: any[] = [];

  defaultImageURL =
    'https://cdn.sanity.io/images//production/f2618421dbd6de2a63ddea363195fbab8f41afc5-3543x2365.jpg';

  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageURL;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  async getPosts(): Promise<any[]> {
    this.posts = await this.sanityService.getAllPosts();
    console.log(this.posts);
    return this.posts;
  }
}
