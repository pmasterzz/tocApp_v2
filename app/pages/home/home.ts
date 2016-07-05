
import {Component, OnInit} from "@angular/core";
import {NavController, Alert, Platform, LocalStorage, Storage} from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
import {Auth} from '../../providers/auth/auth';
import {Article} from '../../providers/article/article';
import {ArticlesPage} from '../../pages/articles/articles';
import {LoginPage} from '../../pages/login/login';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Article]
})
export class HomePage implements OnInit {
  constructor(private _nav: NavController, private _auth: Auth, private _platform: Platform, private _article: Article) {
    this._platform = _platform;
  }

  titles;
  local: Storage = new Storage(LocalStorage);

  ngOnInit() {
    this._article.getAllTitles().subscribe(data => {
      this.titles = data.titels;
    })
  }

  getAllArticles(titelID) {
    this._nav.push(ArticlesPage, { titelID: titelID });
  }

  logout() {
    let confirm = Alert.create({
      title: 'Uitloggen',
      message: 'Weet u zeker dat u uit wilt loggen?',
      buttons: [
        {
          text: 'Nee',
          handler: () => {
          }
        },
        {
          text: 'Ja',
          handler: () => {
            localStorage.clear();
            this._nav.setRoot(LoginPage);
            this._nav.popToRoot();
          }
        }
      ]
    });
    this._nav.present(confirm);
  }
}
