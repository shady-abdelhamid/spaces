import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cta } from '../shared/modal/cta.enum';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  modalHidden = true;
  addUserForm: FormGroup;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      name: new FormControl(''),
      job: new FormControl(''),
    });
  }

  public onModalCtaClick(cta: Cta): void {
    if (cta === Cta.Submit) {
      console.log(this.addUserForm.value);
      const { name, job } = this.addUserForm.value;
      this.usersService.createUser(name, job).subscribe(_ => console.log(_));
    }
  }

}
