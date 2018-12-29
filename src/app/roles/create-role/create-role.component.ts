import { Component, OnInit, NgZone } from '@angular/core';
import { Role } from 'models/role';
import { CreateRoleService } from '../create-role.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  role: Role = {
    name: null,
    permissions: [],
    isActive: 'true'
  };
  permissionsError: Boolean = true;
  permissionsTouched: Boolean = false;
  showSuccessAlert: Boolean = false;

  constructor(
    private zone: NgZone,
    private createRoleService: CreateRoleService
  ) { }

  ngOnInit() {
  }

  resetPermissions() {
    this.role.permissions = [];
  }

  onCheckBoxChange(event, permission) {
    this.permissionsTouched = true;
    if (this.role.permissions.indexOf(permission) > -1) {
      this.role.permissions.splice(this.role.permissions.indexOf(permission), 1);
    } else {
      this.role.permissions.push(permission);
    }
    this.permissionsError = this.role.permissions.length > 0 ? false : true;
  }

  processRoleCreateForm(form: NgForm) {
    this.createRoleService.createRole(this.role)
    .subscribe(
      x => console.log('Observable got a next value of: ' + x),
      err => console.error('Observable got an error: ' + err),
      () => {
        form.reset();
        this.resetPermissions();
        this.zone.run(() => {
          this.showSuccessAlert = true;
          setTimeout( () => {
            this.showSuccessAlert = false;
          }, 5000);
        });
        }
    );
  }

}
