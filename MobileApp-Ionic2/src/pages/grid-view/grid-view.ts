import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserService }           from '../userServices/userService';

/*
  Generated class for the GridView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grid-view',
  templateUrl: 'grid-view.html'
})
export class GridView extends HomePage{

  constructor(public navCtrl: NavController , public userService: UserService, public alertCtrl: AlertController) {
    super(navCtrl, userService, alertCtrl);
  }
}