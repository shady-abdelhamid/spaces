import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('eve.holt@reqres.in'),
      password: new FormControl('cityslicka'),
    });
  }

  public login(): void {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe((_) => {
      this.router.navigate(['users']);
    });
  }

}
