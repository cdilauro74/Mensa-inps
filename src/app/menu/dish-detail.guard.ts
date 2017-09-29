import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DishDetailGuard implements CanActivate {
  constructor(private _route:Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot): boolean {
      let id = +next.paramMap.get('id')
      if (isNaN(id) || id<0) {
        this._route.navigate(['/menu'])
        return false
      }
    return true;
  }
}
