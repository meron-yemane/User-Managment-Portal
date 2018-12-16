import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user;
  name: string;
  login: string;
  email: string;
  roles;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['userid'];
      this.userService
        .getUsers()
        .subscribe(users => this.user = users[userId]);
    });
  }

  processUserEditForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}.`;
    alert(allInfo);
  }
}
