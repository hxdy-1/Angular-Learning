import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'http-get-post';

  http: HttpClient = inject(HttpClient);

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http
      .get<any>('https://fakestoreapi.com/products')
      .subscribe((res) => console.log(res));
  }

  sendData() {
    this.http
      .post('https://api.restful-api.dev/objects', {
        name: 'Apple MacBook Pro 16',
        data: {
          year: 2019,
          price: 1849.99,
          'CPU model': 'Intel Core i9',
          'Hard disk size': '1 TB',
        },
      })
      .subscribe((res) => console.log(res));
  }
}
