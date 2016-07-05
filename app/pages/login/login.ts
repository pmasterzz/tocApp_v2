import { Component, OnInit } from '@angular/core';
import { NavController, Alert, LocalStorage, Storage, Loading } from 'ionic-angular';
import {Auth} from '../../providers/auth/auth';
import {HomePage} from '../home/home';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [Auth]
})
export class LoginPage implements OnInit {
  constructor(private _nav: NavController, private _auth: Auth) { }
  user = {
    email: "pepijn@seigers.nl",
    password: "pepijntest"
  }

  local: Storage = new Storage(LocalStorage);

  ngOnInit() {
    // let loading = Loading.create({
    //   content: "Please wait...",
    //   duration: 3000
    // });
    // this._nav.present(loading);
    // this.local.get('apphash').then((val) => {
    //   if (val) {
    //     this._nav.pop();
    //     this._nav.push(HomePage);
    //   }
    // });
  }

  login() {
    this._auth.login(this.user).subscribe(data => {
      this.local.set('apphash', data.apphash);
      this.local.set('id', data.id);
      this._nav.push(HomePage);
      this._nav.setRoot(HomePage);
      this._nav.popToRoot();
    })
  }
}

