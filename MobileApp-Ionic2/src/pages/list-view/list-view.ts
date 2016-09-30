import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserService } from '../userServices/userService';
/*
  Generated class for the ListView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-view',
  templateUrl: 'list-view.html'
})
export class ListView extends HomePage {
constructor(public navCtrl: NavController , public userService: UserService, public alertCtrl: AlertController) {
    super(navCtrl, userService, alertCtrl);
  }
}
