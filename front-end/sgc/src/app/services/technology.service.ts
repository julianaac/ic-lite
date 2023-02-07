import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Technology } from '../model/technology';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TechnologyService implements ICrudService<Technology> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/technology/';

  get(termoBusca?: string | undefined): Observable<Technology[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Technology[]>(url);
  }

  getById(id: number): Observable<Technology> {
    let url = this.apiUrl + id;
    return this.http.get<Technology>(url);
  }

  insert(objeto: Technology): Observable<Technology> {
    return this.http.post<Technology>(this.apiUrl, objeto);
  }

  update(objeto: Technology): Observable<Technology> {
    return this.http.put<Technology>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
