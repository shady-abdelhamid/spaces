import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cta } from 'src/app/shared/modal/cta.enum';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users = [];

  modalHidden = true;
  editUserForm: FormGroup;
  selectedUserId: number;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.editUserForm = new FormGroup({
      name: new FormControl(''),
      job: new FormControl(''),
    });

    this.usersService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response;
      },
      error: error => {
        console.log(error);
      },
      complete: () => { }
    });
  }

  /**
   * fills user form with datga before accessing edit user modal
   * @param user user to be filled before accessing edit user modal
   */
  public fillUserForm(user: User): void {
    const { id, name, job } = user;
    this.selectedUserId = id;
    this.editUserForm.get('name').setValue(name);
    this.editUserForm.get('job').setValue(job);
  }

  public onModalCtaClick(cta: Cta): void {
    if (cta === Cta.Submit) {
      const { name, job } = this.editUserForm.value;
      this.usersService.updateUser(this.selectedUserId, name, job).subscribe(_ => { });
    }
  }

}
