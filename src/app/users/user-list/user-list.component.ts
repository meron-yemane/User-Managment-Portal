import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users;
  result;
  allUsers;
  searchTerm: string;

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
      allUsers => this.users = this.activeUsers(allUsers)
    );
  }
}
