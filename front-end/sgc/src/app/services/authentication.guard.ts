import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private servicoLogin: LoginService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const autenticado = this.servicoLogin.verificaLogin();
      if (autenticado) {
        const papelExigido = route.data['papel'];
        const papelUsuario = this.servicoLogin.getUser().typeUser;
        if (papelExigido && !papelExigido.includes(papelUsuario.type_user_name)){
            return false;
        }
        return true;
      }
      return false;
    }
}
