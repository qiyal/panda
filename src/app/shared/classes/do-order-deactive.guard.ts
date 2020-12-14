import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {OrderComponent} from '../../cart/order/order.component';

@Injectable({
  providedIn: 'root'
})
export class DoOrderDeactiveGuard implements CanDeactivate<OrderComponent> {
  canDeactivate(component: OrderComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree {
    console.log(component.address);
    if (component.address !== undefined && component.address !== '')
      return window.confirm('Unsaved data detected. Want to exit?');
    else {
      return true;
    }
  }

}
