import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { CreateUserService } from './create-user.service';
import { HttpClientModule } from '@angular/common/http';
import { DeleteUserService } from './delete-user.service';
import { UserFilterPipe } from './user-filter.pipe';

@NgModule({
  declarations: [UserListComponent, UserSingleComponent, UserEditComponent, UserCreateComponent, UserFilterPipe],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CreateUserService,
    DeleteUserService
  ]
})
export class UsersModule { }
