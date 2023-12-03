import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rd-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.sass'
})
export class FirstComponent {

  routeData = "";

  constructor(activatedRoute : ActivatedRoute) {
    activatedRoute.data.subscribe(ar => {
      this.routeData = ar["desc"];
    });
  }
}
