import { Component, OnInit } from '@angular/core';
import { GetRolesService } from '../get-roles.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {
  roles;

  constructor(private getRolesService: GetRolesService) { }

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
    this.getRolesService.getRoles().subscribe(
      allRoles => this.roles = this.activeRoles(allRoles)
    );
  }

}
