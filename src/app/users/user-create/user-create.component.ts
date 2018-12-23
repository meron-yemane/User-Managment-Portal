import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  rolesError: Boolean = true;
  rolesTouched: Boolean = false;
  showSuccessAlert: Boolean = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  resetRoles() {
    this.user.roles = [];
  }
  onCheckBoxChange(event, role) {
    this.rolesTouched = true;
    if (this.user.roles.indexOf(role) > -1) {
      this.user.roles.splice(this.user.roles.indexOf(role), 1);
    } else {
      this.user.roles.push(role);
    }
    this.rolesError = this.user.roles.length > 0 ? false : true;
  }

  processUserCreateForm() {
    this.userService
    .createUser(this.user)
    .subscribe(us => {
      console.log(us);
      this.showSuccessAlert = true;
      console.log('askfljadslkfadsjflkas');
      setTimeout( () => {
        this.showSuccessAlert = false;
      });
    });
  }


}
