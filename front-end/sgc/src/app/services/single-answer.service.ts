import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SingleAnswer } from '../model/singleAnswer';

import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class SingleAnswerService implements ICrudService<SingleAnswer> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/singleanswer/';

  get(termoBusca?: string | undefined): Observable<SingleAnswer[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<SingleAnswer[]>(url);
  }

  getById(id: number): Observable<SingleAnswer> {
    let url = this.apiUrl + id;
    return this.http.get<SingleAnswer>(url);
  }

  insert(objeto: SingleAnswer): Observable<SingleAnswer> {
    return this.http.post<SingleAnswer>(this.apiUrl, objeto);
  }

  update(objeto: SingleAnswer): Observable<SingleAnswer> {
    return this.http.put<SingleAnswer>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
  nextStatus(id: number): Observable<SingleAnswer> {
    let url = this.apiUrl + 'status/next/' + id;
    return this.http.put<SingleAnswer>(url, null);
  }
  previousStatus(id: number): Observable<SingleAnswer> {
    let url = this.apiUrl + 'status/previous/' + id;
    return this.http.put<SingleAnswer>(url, null);
  }
}
