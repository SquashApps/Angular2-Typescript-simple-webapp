import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { UserService } from '../userServices/userService';
import { Tabs } from '../tabs/tabs';

@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html'
})
export class EditUser {
errorMessage: string;
  user: any;
  id: any;
  constructor (private userService: UserService, public navCtrl: NavController, private navParams: NavParams) {
    this.id = navParams.get('id');
  }
  ngOnInit() { 
     this.getUserData(this.id);
  }
 getUserData(id: string) {
  this.userService.getUser(id)
                     .then(
                       (users:any) =>  this.user = users.user,
                       (error:any) =>  this.errorMessage = <any>error);
}
  updateUser (user: any) {
    if (!user) { return; }
    this.userService.updateUser(this.id , user)
                     .then(
                       user  => this.navCtrl.setRoot(Tabs),
                       error =>  this.errorMessage = <any>error);
   }
}
