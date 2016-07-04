import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, Alert} from 'ionic-angular';
import {Article} from '../../providers/article/article';

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
  constructor(private _nav: NavController, private _navParams: NavParams, private _article: Article) {

  }
  url;
  articles = [];

  ngOnInit() {
    this.url = this._navParams.get("url");
    this._article.getAllArticles(this.url).subscribe(data => {
      console.log(data);
      //this.articles = data;
    }, error => {
      console.log(error);
    })
  }



}


