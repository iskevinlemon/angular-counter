import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <div>
    <h1>{{count}}</h1>
    <button (click)="incrementCount()">
      Add
    </button>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count: number = 0;

  incrementCount(){
    this.count ++;
  }
  
}

