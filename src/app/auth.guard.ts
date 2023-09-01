import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('token') == null || localStorage.getItem('token') == ''){
      return false;
    }else{
      return true;
    }



  }

}
