import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-slate-600 text-slate-900 md:from-25% px-4"
    >
      <div class="max-w-lg w-full text-center">
        <div class="mb-8">
          <svg
            class="mx-auto h-40 w-40 text-gray-400 dark:text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h1
          class="text-4xl font-bold text-gray-50 dark:text-white mb-4 animate-fade-in-down"
        >
          Oops! Page Not Found
        </h1>
        <p
          class="text-xl text-gray-400 dark:text-gray-400 mb-8 animate-fade-in-up"
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          routerLink="/"
          class="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce"
        >
          Go Back Home
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-down {
        animation: fadeInDown 0.5s ease-out;
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.5s ease-out;
      }
      .animate-bounce {
        animation: bounce 1s infinite;
      }
      @keyframes bounce {
        0%,
        100% {
          transform: translateY(-5%);
        }
        50% {
          transform: translateY(0);
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ErrorPage {}
