import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EvaluationAnswer } from '../model/evaluationAnswer';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class EvaluationAnswerService implements ICrudService<EvaluationAnswer> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/evaluationanswer/';

  get(termoBusca?: string | undefined): Observable<EvaluationAnswer[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<EvaluationAnswer[]>(url);
  }

  getById(id: number): Observable<EvaluationAnswer> {
    let url = this.apiUrl + id;
    return this.http.get<EvaluationAnswer>(url);
  }

  insert(objeto: EvaluationAnswer): Observable<EvaluationAnswer> {
    return this.http.post<EvaluationAnswer>(this.apiUrl, objeto);
  }

  update(objeto: EvaluationAnswer): Observable<EvaluationAnswer> {
    return this.http.put<EvaluationAnswer>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
