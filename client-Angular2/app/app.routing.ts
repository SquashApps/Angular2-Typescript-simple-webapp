import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserListComponent }  from './user/user.component';
import { UserDetailComponent }  from './user/user-detail.component';
import { UserAddComponent }  from './user/user-add.component';
import { UserEditComponent }  from './user/user-edit.component';

const appRoutes: Routes = [
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'users/add', component: UserAddComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  {
    path: 'users',
    component: UserListComponent,
    data: {
      title: 'Users List'
    }
  },
  { path: '', component: AppComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
