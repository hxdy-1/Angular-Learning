import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'observables-basics';

  array1 = [1, 2, 3, 4, 5];

  myObservable = of(...this.array1);

  getAsyncData() {
    this.myObservable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable completed'),
    });
  }
}
