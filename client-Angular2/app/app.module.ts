import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent }  from './app.component';
import { UserListComponent }  from './user/user.component';
import { UserDetailComponent }  from './user/user-detail.component';
import { UserAddComponent }  from './user/user-add.component';
import { UserEditComponent }  from './user/user-edit.component';
import { UserService } from './user/user.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserAddComponent,
    UserEditComponent
    ],
  providers: [
    appRoutingProviders,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
