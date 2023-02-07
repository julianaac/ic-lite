import { Component } from '@angular/core';
import { TypeUser } from 'src/app/model/typeUser';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { TypeUserService } from 'src/app/services/type-user.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private servicoLogin: LoginService,
/*     private servicoTyperUser: TypeUserService, //criado para testar o get do user
    private servicoUser: UserService //criado para testar o get do user no usuario logado */

  ) {}

  registro: User=<User>{};
  papel: TypeUser=<TypeUser>{};

  isAutenticado(): boolean {
    return this.servicoLogin.isAutenticado();
  }

  isAdmin(): boolean {
    return this.servicoLogin.isAdmin();
  }

  getUser(): User {
    return this.servicoLogin.getUser();
  }

  logout(): void {
    this.servicoLogin.logout();
  }
}
