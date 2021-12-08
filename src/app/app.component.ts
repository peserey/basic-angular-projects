import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first-education-project';
  user = 'Aybuke';
  items : any = [
    {description: "Breakfast", action: "No"},
    {description: "Sport", action: "No"},
    {description: "Cinema", action: "No"}
  ];
}
