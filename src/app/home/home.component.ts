import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rd-home',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
