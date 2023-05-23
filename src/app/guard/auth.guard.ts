import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  constructor(private service: AuthService, private route: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.service.loggedIn()){
        return true;
      }else{
        this.route.navigate(["/sign-in"])
        return false;
      }
    
  }
  
}
