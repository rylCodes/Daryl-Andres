import { Routes } from '@angular/router';
import { PortfolioComponent } from '@pages/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('@pages/blog/blog.routes').then((m) => m.BlogRoutes),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@pages/error/error.routes').then((m) => m.ErrorRoutes),
  },
];
