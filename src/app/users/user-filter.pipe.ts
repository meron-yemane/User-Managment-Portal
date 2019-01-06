import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'models/user';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: User[], searchTerm: string): User[] {
    if (!users || !searchTerm) {
      return users;
    }

    return users.filter(user => {
      return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
  }

}
