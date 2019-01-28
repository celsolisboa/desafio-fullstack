import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.tokenExiste()) {
      if (state.url === '/') {
        this.router.navigate(['/cursos']);
        return false;
      }
      return true
    } else if (state.url === '/') {
      return true;
    }else{
        this.router.navigate(['/']);
         return false;
    }
  }
}
