import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User }           from './user';
import { UserService } from './user.service';
import { getUserData } from './get-user';


@Component({
    selector: 'my-app',
    templateUrl: 'app/user/user-edit.html'
})

export class UserEditComponent {
  errorMessage: string;
  user: any;
  id: any;
  constructor (private userService: UserService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() { 
    this.route.params.forEach((params: Params) => {
     this.id = params['id']; 
     getUserData(this.id,this.userService)
     .then(users => this.user = users);
   });
  }
  updateUser (user: any) {
    console.log(user);
    console.log(this.id);
    if (!user) { return; }
    this.userService.updateUser(this.id , user)
                     .then(
                       user  => this.router.navigate(['/users']),
                       error =>  this.errorMessage = <any>error);
   }
}
