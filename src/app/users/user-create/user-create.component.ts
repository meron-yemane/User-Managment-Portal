import { Component, OnInit, NgZone } from '@angular/core';
import { User } from 'models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from '../create-user.service';
import { NgForm } from '@angular/forms';

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
    roles: [],
    isActive: 'true'
  };
  rolesError: Boolean = true;
  rolesTouched: Boolean = false;
  showSuccessAlert: Boolean = false;
  constructor(
    private zone: NgZone,
    private createUserService: CreateUserService,
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

  processUserCreateForm(form: NgForm) {
    this.createUserService.createUser(this.user)
    .subscribe(
      x => console.log('Observable got a next value of: ' + x),
      err => console.error('Observable got an error: ' + err),
      () => {
        form.reset();
        this.resetRoles();
        this.zone.run(() => {
          this.showSuccessAlert = true;

          console.log('success?', this.showSuccessAlert);
          setTimeout( () => {
            this.showSuccessAlert = false;
            console.log(this.showSuccessAlert);
          }, 5000);
        });
        });
    }

}
