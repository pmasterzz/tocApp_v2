import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

/*
  Generated class for the WebviewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/webview/webview.html',
})
export class WebviewPage {
  constructor(private nav: NavController, private _navParams:NavParams, private _platform:Platform) {
    this.url = this._navParams.get('url');
  }
  url:string;


  launch(url){
    this._platform.ready().then(() => {
      InAppBrowser.open(url, '_self' , 'location=yes');
    })
  }
}
