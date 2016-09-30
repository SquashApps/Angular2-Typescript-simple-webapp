import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { User }           from '../userServices/user';
import { UserService }           from '../userServices/userService';
import { EditUser }           from '../edit-user/edit-user';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  errorMessage: string;
  users: User[];
  totalUsers: number;
  currentPage: number = 0;
 	itemsPerPage: number = 10;
  filterCriteria = {'skip' : 0, 'limit': 10};
  constructor (public navCtrl: NavController , public userService: UserService, public alertCtrl: AlertController) {
    this.users=[];
  }
  ngOnInit() { 
 	  this.filterCriteria.skip = 0;
 	  this.filterCriteria.limit = this.itemsPerPage;
    this.getUsers(); 
  }
  getUsers() {
    this.userService.getUsers(this.filterCriteria)
                     .then(
                       users => { 
                         this.totalUsers = users.count;
                         users.users.forEach((user:any) => {this.users.push(user)});
                        },
                       error =>  this.errorMessage = <any>error);
  }
  editUser(id: any) {
    this.navCtrl.push(EditUser, {
      id: id
    });
  }
  deleteUser(id: any) {
    let confirm = this.alertCtrl.create({
      message: 'Are you sure, you want to delete this user?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.userService.deleteUser(id)
                     .then(
                       user  => {location.reload();},
                       error =>  this.errorMessage = <any>error);
          }
        }
      ]
    });
    confirm.present();
  }
  pushUsers(infiniteScroll) {
 		if (this.users.length < this.totalUsers) {
 			this.currentPage = this.currentPage + 1;
 			this.filterCriteria.skip = this.currentPage * this.itemsPerPage;
    setTimeout(() => {
      this.getUsers();
      infiniteScroll.complete();
    }, 200);
 		}
 	}
}