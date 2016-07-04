import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {LocalStorage, Storage} from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the Article provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Article {
  data: any;
  local: Storage = new Storage(LocalStorage);

  constructor(private _http: Http) {
    this.data = null;
  }
  getAllTitles(){
    return this._http.get('https://www.my-toc.com/appservice/appGetRSS.php?profielID=' + localStorage.getItem('id') + '&code=' + localStorage.getItem('apphash'))
      .map(res => res.json());
  }

  getAllArticles(url){
    // https://www.my-toc.com/appservice/appGetRSSregels.php?profielID=6296&bronID=1627&url=http://feeds.bmj.com/bmj/recent/&code=bEEUd5jETvZVs9yi0vBcFDA8KJR7juiG
    // let url2 = url.split('&');
    // url2[1] += '&code=' + localStorage.getItem('apphash');
    // url2 = url2.join('&');
    // console.log(url2);
    return this._http.get(url + '&code=' + localStorage.getItem('apphash'))
    .map(res => {
      console.log(res.json());
      res.json();
    });
  }
}

