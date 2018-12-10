import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SimpleAuthService } from './services/simple-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SimpleGuardAuthGuard implements CanActivate {

  constructor(private authService: SimpleAuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      if (this.authService.isLogged()) {
        return true;
      }
      
      this.router.navigate(['/']);
      return false;
  }
}
