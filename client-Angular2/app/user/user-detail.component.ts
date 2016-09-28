import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User }           from './user';
import { UserService } from './user.service';
import { getUserData } from './get-user';

@Component({
    selector: 'my-app',
    templateUrl: 'app/user/user-detail.html'
})

export class UserDetailComponent {
  errorMessage: string;
  user: any;
  totalUsers: number;
  constructor (private userService: UserService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() { 
    this.route.params.forEach((params: Params) => {
     let id = params['id']; 
     getUserData(id,this.userService)
     .then(users => this.user = users);
   });
  }
}