import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subject } from '../model/subject';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class SubjectService implements ICrudService<Subject> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/subject/';

  get(termoBusca?: string | undefined): Observable<Subject[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Subject[]>(url);
  }

  getById(id: number): Observable<Subject> {
    let url = this.apiUrl + id;
    return this.http.get<Subject>(url);
  }
  
  getSubjectTeacher(id: number): Observable<Subject[]> {
    let url = this.apiUrl +'subjectteacher/'+ id;
    return this.http.get<Subject[]>(url);
  }
  getCurrentSubject(id: number): Observable<Subject> {
    let url = this.apiUrl +'currentsubject/'+ id;
    return this.http.get<Subject>(url);
  }

  insert(objeto: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.apiUrl, objeto);
  }

  update(objeto: Subject): Observable<Subject> {
    return this.http.put<Subject>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
