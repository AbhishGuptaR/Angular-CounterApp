import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter App';
  count: number = 0;

  onIncrease = () => {
    this.count = this.count + 1;
  };

  onDecrease = () => {
    this.count = this.count - 1;
  };

  onReset = () => {
    this.count = 0;
  };
}
