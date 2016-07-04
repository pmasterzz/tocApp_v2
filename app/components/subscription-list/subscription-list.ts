import { Component } from '@angular/core';
import {Article} from '../../providers/article/article';

/*
  Generated class for the SubscriptionList component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'subscription-list',
  templateUrl: 'build/components/subscription-list/subscription-list.html',
  providers:[Article]
})
export class SubscriptionList {

  titles=[];

  constructor() {
  }
}
