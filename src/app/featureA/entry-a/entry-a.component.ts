import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { FakeAuthService } from '../../shared/fake-auth.service';

@Component({
  selector: 'rd-entry-a',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './entry-a.component.html',
  styleUrl: './entry-a.component.css'
})
export class EntryAComponent {

  routingEvents : string[] = [];
  subComponentActive = false;
  currentRouteData = "";
  userAuthenticated = false;

  constructor(private router : Router, private fakeAuthService : FakeAuthService) {
    router.events.subscribe(e => {
      this.routingEvents.push(JSON.stringify(e));
      if ('url' in e && e.type===1) {
        this.subComponentActive = e.url !== '/featurea';
      } else {
        this.subComponentActive = false;
      }
    });
  }

  toggleAuth() {
    this.userAuthenticated=!this.userAuthenticated;
    this.fakeAuthService.authenticate(this.userAuthenticated);
  }

}
