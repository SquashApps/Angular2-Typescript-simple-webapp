import { UserService } from './user.service';

export function getUserData(id: string,myService:UserService) {
    let errorMessage: string;
    let user: any;
    console.log(id);
   return myService.getUser(id)
                     .then(
                       (users:any) =>  this.user = users.user,
                       (error:any) =>  this.errorMessage = <any>error);
}