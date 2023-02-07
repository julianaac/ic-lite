import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  constructor(
    private servicoLogin: LoginService,
    private http: HttpClient
  ) {}


  /* inputFileChange(event) {
    if (event.target.files && event.target.files[0]){
        const foto = event.target.files[0];
        const formData = new FormData();
        formData.append('foto', foto);

        this.http.post('https://localhost:4200/')
    }
  } */



  getUser(): User {
    return this.servicoLogin.getUser();
  }

}
