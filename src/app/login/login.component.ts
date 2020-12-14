import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../services/user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    this.login = '';
    this.password = '';
  }

  logIn() {
    console.log(this.login);
    console.log(this.password);
    if (this.userAuthService.logIn(this.login, this.password)) {
      this.router.navigate(['/profile']);
    }
  }
}
