import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  post: any ={
    id:1,
     title: 'Hello World',
     desc: "Hello I'm Alim"
  }
}
