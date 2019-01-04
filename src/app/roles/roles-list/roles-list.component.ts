import { Component, OnInit } from '@angular/core';
import { GetRolesService } from '../get-roles.service';
import { DeleteRoleService } from '../delete-role.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {
  roles;
  roleIdToBeDeleted: number;
  constructor(
    private getRolesService: GetRolesService,
    private deleteRoleService: DeleteRoleService    ) { }

  activeRoles = function(obj) {
    const result = [];
    let role;
    for (role = 0; role < obj.length; role++) {
      if (obj[role].isActive === 'true') {
        result.push(obj[role]);
      }
    }
    return result;
  };

  ngOnInit() {
    this.getRolesService.getRoles()
    .subscribe((allRoles) => {
      this.roles = this.activeRoles(allRoles);
    });
  }

  updateRoleIdToBeDeleted(roleId) {
    this.roleIdToBeDeleted = roleId;
  }

  processDeleteRole() {
    this.deleteRoleService.deleteRole(this.roleIdToBeDeleted)
    .subscribe({
      next: x => console.log('Observers next value: ' + x),
      error: err => console.log(err),
      complete: () => {
        this.getRolesService.getRoles()
          .subscribe((allRoles) => {
          this.roles = this.activeRoles(allRoles);
        });
      }
    });

  }

}
