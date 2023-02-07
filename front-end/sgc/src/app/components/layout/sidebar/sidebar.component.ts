import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private servicoLogin: LoginService
  ) {}

  isAutenticado(): boolean {
    return this.servicoLogin.isAutenticado();
  }

  isCoord(): boolean {
    return this.servicoLogin.isCoord();
  }

  isAdmin(): boolean {
    return this.servicoLogin.isAdmin();
  }

  isAluno(): boolean {
    return this.servicoLogin.isAluno();
  }

  isProfessor(): boolean {
    return this.servicoLogin.isProfessor();
  }
  getUsuario(): User {
    return this.servicoLogin.getUser();
  }

  logout(): void {
    this.servicoLogin.logout();
  }
  ngOnInit() {
    $('.sidebar-toggler').click(function () {
      $('.sidebar, .content').toggleClass("open");
      return false;
    });
  }

}
