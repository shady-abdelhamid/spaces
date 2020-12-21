import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  modalHidden = true;
  addUserForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      name: new FormControl(''),
      job: new FormControl(''),
    });
  }

  public closeModal(): void {
    this.modalHidden = true;
  }

}
