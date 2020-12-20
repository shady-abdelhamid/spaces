import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response;
        console.log(this.users);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('Done');
      }
    });
  }

}
