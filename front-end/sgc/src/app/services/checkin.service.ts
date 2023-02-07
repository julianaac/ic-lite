import { MessageService } from './message.service';
import { Student } from 'src/app/model/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Checkin } from '../model/checkin';
import { User } from '../model/user';
import { ICrudService } from './../model/i-crud-service';
import { CheckinSubject } from '../model/checkin-subject';
import { CheckinStudentCurrent } from '../model/checkin-student-current';


@Injectable({
  providedIn: 'root',
})
export class CheckinService implements ICrudService<Checkin> {
  constructor(private http: HttpClient,private messageService: MessageService) {}
  private student: Student = <Student>{};


  subUrl: string = environment.API_URL + '/viewcurrentdiscipline/';
  apiUrl: string = environment.API_URL + '/checkin/';
  checkinCurrent: string = environment.API_URL + '/viewcurrentdisciplinecheckoutrel/';
  newUrl: string = environment.API_URL + '/student/';
  private getUrl(id: number): string {
    return `${this.newUrl}${id}`;
  }
  get(termoBusca?: string | undefined): Observable<Checkin[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Checkin[]>(url);
  }
  getOne(id: number): Observable<Student> {
    return this.http.get<Student>(this.getUrl(id));
  }


  getByIdStudent(id: number){
    let url = this.newUrl + 'busca/user/' + id;
    return this.http.get<Student>(url);
  }
  getSubject(id: number){
    let url = this.subUrl + id;
    return this.http.get<CheckinSubject>(url);
  }



  getFindCheckinCurrent(id: number): Observable<Checkin> {
    let url = this.apiUrl +"findcheckincurrent/"+ id;
    return this.http.get<Checkin>(url);
  }
  getFindCheckinCurrentRel(id: number): Observable<CheckinStudentCurrent> {
    let url = this.checkinCurrent + id;
    return this.http.get<CheckinStudentCurrent>(url);
  }
  getById(id: number): Observable<Checkin> {
    let url = this.apiUrl + id;
    return this.http.get<Checkin>(url);
  }


  insert(objeto: Partial<Checkin>): Observable<Checkin> {
    return this.http.post<Checkin>(this.apiUrl, objeto);
  }


  update(objeto: Checkin): Observable<Checkin> {
    return this.http.put<Checkin>(this.apiUrl, objeto);
  }


  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }


  // private descAttributes(student: Student): string {
  //   return `SEU ID=${student.student_id} E SEU NOME=${student.user.user_name}`;
  // }


}
