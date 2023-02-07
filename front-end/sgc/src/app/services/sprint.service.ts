import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sprint } from '../model/sprint';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class SprintService implements ICrudService<Sprint> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/sprint/';

  get(termoBusca?: string | undefined): Observable<Sprint[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Sprint[]>(url);
  }

  getById(id: number): Observable<Sprint> {
    let url = this.apiUrl + id;
    return this.http.get<Sprint>(url);
  }

  insert(objeto: Sprint): Observable<Sprint> {
    return this.http.post<Sprint>(this.apiUrl, objeto);
  }

  update(objeto: Sprint): Observable<Sprint> {
    return this.http.put<Sprint>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
