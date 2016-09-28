import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User }           from './user';
import { UserService } from './user.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/user/user.html'
})

export class UserListComponent {
  @Input()
  errorMessage: string;
  users: User[];
  totalUsers: number;
  currentPage: number = 0;
 	itemsPerPage: number = 2;
  filterCriteria = {'skip' : 0, 'limit': 2};
  constructor (private userService: UserService, private router: Router) {
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
  userDetail(id: any) {
    this.router.navigate(['/user/' + id]);
  }
  editUser(id: any) {
    this.router.navigate(['/user/edit/' + id]);
  }
  deleteUser(id: any) {
    console.log(id);
    this.userService.deleteUser(id)
                     .then(
                       user  => location.reload(),
                       error =>  this.errorMessage = <any>error);
  }
  pushUsers() {
 		if (this.users.length < this.totalUsers) {
 			this.currentPage = this.currentPage + 1;
 			this.filterCriteria.skip = this.currentPage * this.itemsPerPage;
 			this.getUsers();
 		}
 	}
}