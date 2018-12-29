import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesSingleComponent } from './roles-single/roles-single.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RolesListComponent, RolesSingleComponent, CreateRoleComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule
  ]
})
export class RolesModule { }
