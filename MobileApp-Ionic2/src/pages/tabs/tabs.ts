import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GridView } from '../grid-view/grid-view'
import { ListView } from '../list-view/list-view'

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {
  tab1Root: any = GridView;
  tab2Root: any = ListView;
  constructor(public navCtrl: NavController) {

  }
}