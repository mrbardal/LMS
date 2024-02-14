import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import coursesData from '../assets/db.json';
import { Course } from './models/course.model';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LMS';
  courses : Course[] = coursesData.cousrses;

  constructor() {
    console.log(this.courses);
  }
}
