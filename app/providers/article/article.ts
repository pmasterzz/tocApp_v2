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

  getAllArticles(bronId){
    let url = "https://www.my-toc.com/appservice/appGetRSSArtikelen.php?profielID=" + localStorage.getItem('id')  +"&bronID=" + bronId + "&code=" + localStorage.getItem('apphash');
    //  let url2 = url.split('&');
    //  url2[2] = 'code=' + localStorage.getItem('apphash');
    //  url2 = url2.join('&');
    return this._http.get(url)
    .map(res => 
      res.json()
    );
  }
}

