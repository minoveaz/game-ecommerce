import { Injectable, ɵConsole } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Console } from 'console';


import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor(private auth: AuthService, private router: Router){}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
      // Primero comprobar que existe sesión
      if (this.auth.getSession() !== null){
        console.log('estamos logeados');
        const dataDecode = this.decodeToken();
        console.log(dataDecode);
      // Comprobar que no está caducado el token
        if (dataDecode.exp < new Date().getTime() / 1000) {
        console.log('Sesion caducada');
        this.router.navigate(['/login']);
        return false;
      }
      // El role de usuario es ADMIN
        if (dataDecode.user.role === 'ADMIN'){
          console.log('Somos administradores');
          return true;
        }
        console.log('No somos administradores');
      }
      console.log('Sesion no iniciada');
      return this.redirect();
  }
  redirect(){
    this.router.navigate(['/login']);
    return false;
  }

  decodeToken(){
    return jwt_decode(this.auth.getSession().token);
  }
}
