import { User } from 'src/app/model/user';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
declare const $: any;
import { LoginService } from './services/login.service';
// import * as moment  from 'moment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WEBACADEMY';
  faYoutube = faYoutube;

  constructor(
    private servicoLogin: LoginService
  ) {}
  ngAfterViewInit(): void {
  // $(document).ready(function () {
  // });
 }


  // getData(){
  //   const todayDate = moment();
  // }
  // isAutenticado(): boolean {
  //   return this.servicoLogin.isAutenticado();
  // }

  // isAdmin(): boolean {
  //   return this.servicoLogin.isAdmin();
  // }

  // getUsuario(): User {
  //   return this.servicoLogin.getUser();
  // }

  // logout(): void {
  //   this.servicoLogin.logout();
  // }

  ngOnInit() {
      $('#example').DataTable();



  }
}
