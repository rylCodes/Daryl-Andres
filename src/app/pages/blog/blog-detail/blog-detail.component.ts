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
  similarPosts: any[] = [];
  isLoading: boolean = true;
  postData: any;
  faArrowLeft = faArrowLeft;
  faHome = faHome;

  placeholderImage = '../../../../assets/placeholder-image.svg';

  constructor() {
    this.id = this.route.snapshot.params['slug'];
  }

  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.placeholderImage;
  }

  handleImageLoad(event: any) {
    event.target.classList.remove('image-loading');
  }

  handleImageError(event: any) {
    event.target.src = this.placeholderImage;
  }

  ngOnInit() {
    this.getPost(this.id);
  }

  async getPost(id: string): Promise<void> {
    try {
      this.isLoading = true;
      this.postData = await this.sanityService.getSpecificPost(id);
      this.postDataContent = toHTML(this.postData.content);

      if (this.postData) {
        this.titleService.setTitle(`Daryl | ${this.postData.title}`);
        this.getSimilarPosts(this.postData.category, this.postData._id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  async getSimilarPosts(
    category: string,
    currentPostId: string,
  ): Promise<void> {
    const allPosts = await this.sanityService.getAllPosts();
    this.similarPosts = allPosts
      .filter(
        (post) => post.category === category && post._id !== currentPostId,
      )
      .slice(0, 3);
  }
}
