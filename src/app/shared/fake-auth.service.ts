import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private _isAuthenticated:boolean=false;

  get authenticated() {
    return this._isAuthenticated;
  }

  authenticate(doAuthenticate : boolean) {
    this._isAuthenticated = doAuthenticate;
  }

}
