import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AddUser } from '../pages/add-user/addUser';
import { EditUser } from '../pages/edit-user/edit-user';
import { UserService } from '../pages/userServices/userService';
import { GridView } from '../pages/grid-view/grid-view';
import { ListView } from '../pages/list-view/list-view';
import { Tabs } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AddUser,
    EditUser,
    GridView,
    ListView,
    Tabs
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddUser,
    EditUser,
    GridView,
    ListView,
    Tabs
  ],
  providers: [ UserService ]
})
export class AppModule {}
