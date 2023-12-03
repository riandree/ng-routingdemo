import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rd-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.sass'
})
export class SecondComponent {

    currentTime = "unbekannt";

    constructor(activatedRoute : ActivatedRoute) {
      activatedRoute.data.subscribe(d => {
        this.currentTime=d["currentTime"];
      });
    }
}
