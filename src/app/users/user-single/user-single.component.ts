import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  user;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['userid'];
      this.userService
        .getUser(userId)
        .subscribe(user => this.user = user);
    });
  }
}
