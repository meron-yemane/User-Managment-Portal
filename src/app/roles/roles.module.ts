import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesSingleComponent } from './roles-single/roles-single.component';

@NgModule({
  declarations: [RolesListComponent, RolesSingleComponent],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
