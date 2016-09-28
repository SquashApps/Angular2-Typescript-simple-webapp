import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User }           from './user';
import { UserService } from './user.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/user/user-add.html'
})

export class UserAddComponent {
  errorMessage: string;
  user: any;
  constructor (private userService: UserService, private router: Router) {}
  ngOnInit() { 
    
  }
  addUser (user: any) {
    console.log(user);
    if (!user) { return; }
    this.userService.addUser(user)
                     .then(
                       user  => this.router.navigate(['/users']),
                       error =>  this.errorMessage = <any>error);
   }
}
