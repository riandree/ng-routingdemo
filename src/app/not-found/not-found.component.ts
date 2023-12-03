import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rd-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  path = "";

  constructor(private activeRoute : ActivatedRoute) {
    activeRoute.url.subscribe((segment) => {
      this.path=`/${segment.join('/')}`;
    });
  }
}
