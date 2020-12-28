import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() public title = '';

  public get isLoggedin(): boolean {
    return this.authService.isLoggedIn();

  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
