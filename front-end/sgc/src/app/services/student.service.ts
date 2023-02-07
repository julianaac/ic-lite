import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ICrudService } from '../model/i-crud-service';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements ICrudService<Student> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/student/';

  get(termoBusca?: string | undefined): Observable<Student[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Student[]>(url);
  }
  // getStudent(termoBusca?: number | undefined): Observable<Student[]> {
  //   let url = this.apiUrl;
  //   if (termoBusca) {
  //     url += 'busca/user/' + termoBusca;
  //   }
  //   return this.http.get<Student[]>(url);
  // }
  getById(id: number): Observable<Student> {
    let url = this.apiUrl + id;
    return this.http.get<Student>(url);
  }
  getByUser(id: number): Observable<Student> {
    let url = this.apiUrl + 'busca/user/' + id;
    return this.http.get<Student>(url);
  }
  insert(objeto: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, objeto);
  }

  update(objeto: Student): Observable<Student> {
    return this.http.put<Student>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
