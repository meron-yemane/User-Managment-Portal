import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: ':userid',
    component: UserSingleComponent
  },
  {
    path: ':userid/edit',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
