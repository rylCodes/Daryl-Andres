import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  bodyGradient: string = 'linear-gradient(to right, black, #0F81FF)'; // Replace with your default gradient

  ngOnInit() {
    this.getBodyGradient();
  }

  getBodyGradient() {
    const body = document.querySelector('body');
    if (body) {
      const bodyStyles = getComputedStyle(body);
      this.bodyGradient = bodyStyles.getPropertyValue('background');
    }
  }
}
