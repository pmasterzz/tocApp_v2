import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
  user = {
    apphash: null,
    id: null,
    email: null

  }

  constructor(private _http: Http) {

  }

  login(user) {
    console.log("https://www.my-toc.com/appservice/applogin.php?gebrNaam=" + user.email + "&wachtwoord=" + user.password);
    return this._http.get("https://www.my-toc.com/appservice/applogin.php?gebrNaam=" + user.email + "&wachtwoord=" + user.password)
      .map(res => res.json());
  }

  isLoggedIn() {
    return localStorage.getItem('id');
  }
}

