import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user: User = {
    name: null,
    email: null,
    login: null,
    roles: []
  };
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onCheckBoxChange(event, role) {
    if (this.user.roles.indexOf(role) > -1) {
      this.user.roles.splice(this.user.roles.indexOf(role), 1);
    } else {
      this.user.roles.push(role);
    }
  }

  processUserCreateForm() {
    this.userService.createUser(this.user).subscribe(
      (data: User) => {
        console.log(data);
      }
    );
  }

}
