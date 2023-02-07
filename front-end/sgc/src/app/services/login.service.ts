import { CheckinSubject } from './../model/checkin-subject';
import { Classroom } from 'src/app/model/classroom';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Student } from '../model/student';
import { User } from '../model/user';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private autenticado: boolean = false;
  private user: User = <User>{};
  private student: Student = <Student>{};
  private subject: Subject = <Subject>{};
  private subjectCheckin: CheckinSubject = <CheckinSubject>{};
  isAutenticado(): boolean {
    return this.autenticado;
  }

  isAdmin(): boolean {
    return this.user.typeUser.type_user_name == "ROLE_ADMIN";
  }
  isCoord(): boolean {
    return this.user.typeUser.type_user_name == "ROLE_COORDENADOR_DO_PROJETO";
  }
  isProfessor(): boolean {
    return this.user.typeUser.type_user_name == "ROLE_PROFESSOR";
  }
  isAluno(): boolean {
    return this.user.typeUser.type_user_name == "ROLE_ALUNO";
  }
  getUser(): User {
    return this.user;
  }
  getStudent(): Student {
    return this.student;
  }
  getTurma(): CheckinSubject{
    return this.subjectCheckin;
  }
  login(user: User): void {

    this.user = user;
    const credenciaisCodificadas = btoa(user.user_user + ':' + user.user_password);
    const opcoesHttp = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + credenciaisCodificadas
      })
    };

    const url = environment.API_URL + '/user_info/';
    this.http.get<User>(url, opcoesHttp).subscribe({
      next: (user: User) => {
        if (user) {
          this.autenticado = true;
          this.user = user;
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/home']);
        }
      }
    });
  }

  logout(): void {

    const url = environment.API_URL + '/logout';
    this.http.get(url).subscribe({
      complete: () => {
        this.autenticado = false;
        this.user = <User>{};
        sessionStorage.removeItem('user');
        this.router.navigate(['/login']);
      }
    });

  }

  verificaLogin(): boolean {

    if (!this.isAutenticado()) {
      this.user = JSON.parse(
        sessionStorage.getItem('user') || '{}'
      );
      if (Object.keys(this.user).length > 0) {
        this.autenticado = true;
      } else {
        this.router.navigate(['/login']);
      }

    }

    return this.isAutenticado();

  }

}
