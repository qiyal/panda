import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router} from '@angular/router';
import {UserAuthService} from '../../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoOrderGuard implements CanActivateChild {
  constructor(private authService: UserAuthService, private router: Router) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.authService.isAuth()) {
      return true;
    }

    return this.router.parseUrl('/login');
  }
}
