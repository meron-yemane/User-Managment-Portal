import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from 'models/user';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  currentSortOption: string;
  users;
  result;
  allUsers;
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredUsers = this.filterUsers(value);
  }
  filteredUsers: User[];

  filterUsers(searchString: string) {
    return this.users.filter(user => {
      return user.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
    });
  }

  constructor(private userService: UserService) { }

  activeUsers = function(obj) {
    const result = [];
    let user;
    for (user = 0; user < obj.length; user++) {
      if (obj[user].isActive === 'true') {
        result.push(obj[user]);
      }
    }
    return result;
  };

  exportData = function() {
    const options = {
      showLabels: true,
      useBom: false,
      headers: ['Name', 'Email', 'Login', 'Roles', 'isActive', 'ID']
    };
    const usersToExport = JSON.parse(JSON.stringify(this.users));
    for (let user = 0; user < usersToExport.length; user++) {
      usersToExport[user].roles = usersToExport[user].roles.toString();
    }
    return new Angular5Csv(usersToExport, 'Summary of Users', options);
  };

  onSortButtonClick() {

  }

  onSelected(value: string) {
    this.currentSortOption = value;
  }

  ngOnInit() {
    this.currentSortOption = 'Alphabetical Order';
    this.userService.getUsers().subscribe(
      allUsers => {
        this.users = this.activeUsers(allUsers);
        this.filteredUsers = this.users;
      }
    );
  }
}
