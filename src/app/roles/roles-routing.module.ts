import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesSingleComponent } from './roles-single/roles-single.component';
import { CreateRoleComponent } from './create-role/create-role.component';

const routes: Routes = [
  {
    path: '',
    component: RolesListComponent
  },
  {
    path: 'create',
    component: CreateRoleComponent
  },
  {
    path: ':role',
    component: RolesSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
