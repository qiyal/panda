import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthService {
  private userAuth: boolean;

  constructor() {
    this.userAuth = false;
  }

  isAuth(): boolean {
    console.log("auth: " + this.userAuth);
    return this.userAuth;
  }

  logIn(login: string, password: string): boolean {
    if (login === 'admin' && password === 'admin') {
      this.userAuth = true;
      return true;
    }
    return false;
  }
}
