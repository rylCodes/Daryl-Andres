import { Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
export const BlogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    title: 'Daryl | Blog',
  },
  {
    path: ':slug',
    loadChildren: () =>
      import('./blog-detail/blog-detail.routes').then(
        (m) => m.BlogDetailRoutes,
      ),
  },
];
