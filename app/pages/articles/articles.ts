import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, Alert, Platform} from 'ionic-angular';
import {Article} from '../../providers/article/article';
import {WebviewPage} from '../../pages/webview/webview';
import { InAppBrowser } from 'ionic-native';

/*
  Generated class for the ArticlesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/articles/articles.html',
  providers: [Article]
})
export class ArticlesPage implements OnInit {
  constructor(private _nav: NavController, private _navParams: NavParams, private _article: Article, private _platform: Platform) {

  }
  titelID;
  articles = {
    artikelen: []
  };

  ngOnInit() {
    this.titelID = this._navParams.get("titelID");
    this._article.getAllArticles(this.titelID).subscribe(data => {
      this.articles = data;
      console.log(this.articles.artikelen[0]);
    }, error => {
      console.log(error);
    })
  }

  goToWebviewPage(url) {
    this._nav.push(WebviewPage, { url: url });
  }

  launch(url) {
    this._platform.ready().then(() => {
      InAppBrowser.open(url, '_self', 'location=yes');
    })
  }



}


