import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('about') aboutRef!: ElementRef;
  title = 'daryl-andres';

  ngAfterViewInit(): void {
    if (this.aboutRef) {
      console.log(this.aboutRef.nativeElement);
    }
  }
}
