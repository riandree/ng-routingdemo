import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet  } from '@angular/router';

@Component({ 
  selector: 'rd-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'ng-routingdemo';
  brokenLink = `notexistent/${Math.trunc(Math.random()*100)}-${Math.trunc(Math.random()*100)}`;
}
