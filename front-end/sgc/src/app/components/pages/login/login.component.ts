import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private servico: LoginService
  ) { }

  user: User = <User>{};

  submit(form: NgForm): void {
    this.servico.login(this.user);
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
