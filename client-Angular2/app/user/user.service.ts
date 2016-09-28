import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User }           from './user';
import { AppSettings } from '../app.settings';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserService {
  constructor (private http: Http) {}
getUsers (filterCriteria : any): Promise<User> {
  return this.callServices(filterCriteria, `${AppSettings.API_ENDPOINT}list`);
}
getUser (id: any): Promise<User> {
  return this.callServices('', `${AppSettings.API_ENDPOINT}` + id);
}
addUser (user: Object): Promise<User> {
  return this.callServices(user, `${AppSettings.API_ENDPOINT}add`);
}
deleteUser (id: any): Promise<User> {
  return this.callServices('', `${AppSettings.API_ENDPOINT}` + id + `/remove`);
}
updateUser (id: any, user: Object): Promise<User> {
  console.log(id);
  return this.callServices(user, `${AppSettings.API_ENDPOINT}` + id + `/edit`);
}
private callServices (bodyData : any, serviceUrl : string): Promise<User> {
  let body = JSON.stringify({ bodyData });
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post(serviceUrl, body, options)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
  }
private extractData(res: Response) {
  let body = res.json();
  console.log(body);
  return body || { };
}
private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Promise.reject(errMsg);
}
}