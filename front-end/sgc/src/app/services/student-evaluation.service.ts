import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentEvaluation } from '../model/studentEvaluation';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class StudentEvaluationService implements ICrudService<StudentEvaluation> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/studentevaluation/';

  get(termoBusca?: string | undefined): Observable<StudentEvaluation[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<StudentEvaluation[]>(url);
  }

  getById(id: number): Observable<StudentEvaluation> {
    let url = this.apiUrl + id;
    return this.http.get<StudentEvaluation>(url);
  }

  insert(objeto: StudentEvaluation): Observable<StudentEvaluation> {
    return this.http.post<StudentEvaluation>(this.apiUrl, objeto);
  }

  update(objeto: StudentEvaluation): Observable<StudentEvaluation> {
    return this.http.put<StudentEvaluation>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
