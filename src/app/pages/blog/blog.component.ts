import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SanityService } from '@services/sanity/sanity.service';
import {
  faArrowUpRightFromSquare,
  faHome,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule, FormsModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  sanityService = inject(SanityService);
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faHome = faHome;
  faFilter = faFilter;
  posts: any[] = [];
  allPosts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  isLoading: boolean = true;

  placeholderImage = '../../../../assets/placeholder-image.svg';

  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.placeholderImage;
  }

  handleImageLoad(event: any) {
    event.target.classList.remove('image-loading');
  }

  handleImageError(event: any) {
    event.target.src = this.placeholderImage;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  async getPosts(): Promise<void> {
    try {
      this.isLoading = true;
      this.allPosts = await this.sanityService.getAllPosts();
      this.posts = this.allPosts;
      this.extractCategories();
      console.log(this.posts);
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  extractCategories(): void {
    const categoriesSet = new Set(this.allPosts.map((post) => post.category));
    this.categories = ['All', ...Array.from(categoriesSet)];
  }

  filterPosts(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.posts = this.allPosts;
    } else {
      this.posts = this.allPosts.filter((post) => post.category === category);
    }
  }
}
