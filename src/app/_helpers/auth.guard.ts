import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router, private auth : AuthenticationService){

    
  } 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {

      // const user =   this.auth.login(
      // if (user) {
      //     // check if route is restricted by role
      //     if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
      //         // role not authorised so redirect to home page
      //         this.router.navigate(['/']);
      //         return false;
      //     }

      //     // authorised so return true
      //     return true;
      // }

      // // not logged in so redirect to login page with the return url
      // this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    
  }
  
}
