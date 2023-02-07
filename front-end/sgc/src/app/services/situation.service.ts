import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Situation } from '../model/situation';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class SituationService implements ICrudService<Situation> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/situation/';

  get(termoBusca?: string | undefined): Observable<Situation[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Situation[]>(url);
  }

  getById(id: number): Observable<Situation> {
    let url = this.apiUrl + id;
    return this.http.get<Situation>(url);
  }

  insert(objeto: Situation): Observable<Situation> {
    return this.http.post<Situation>(this.apiUrl, objeto);
  }

  update(objeto: Situation): Observable<Situation> {
    return this.http.put<Situation>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
