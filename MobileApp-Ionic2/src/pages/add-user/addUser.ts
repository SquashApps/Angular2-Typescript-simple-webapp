import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../userServices/userService';
import { Tabs } from '../tabs/tabs';

@Component({
  templateUrl: 'addUser.html'
})
export class AddUser {
  errorMessage: string;
  user: any;
  constructor (public navCtrl: NavController, public navParams: NavParams , private userService: UserService) {}
  ngOnInit() { 
    
  }
  addUser (user: any) {
    ('user', user);
    if (!user) { return; }
    this.userService.addUser(user)
                     .then(
                       user  => this.navCtrl.setRoot(Tabs),
                       error =>  this.errorMessage = <any>error);
   }
}