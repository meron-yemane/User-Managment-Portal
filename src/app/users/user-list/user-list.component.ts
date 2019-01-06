import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from 'models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
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

  ngOnInit() {
    this.userService.getUsers().subscribe(
      allUsers => {
        this.users = this.activeUsers(allUsers);
        this.filteredUsers = this.users;
      }
    );
  }
}
