import { Component } from '@angular/core';
import { Question } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  questions: Array<Question>;

  constructor() {
     this.questions = [];
  }
}
