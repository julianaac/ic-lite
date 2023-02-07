import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeTechnology } from '../model/typeTechnology';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TypeTechnologyService implements ICrudService<TypeTechnology> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/typetechnology/';

  get(termoBusca?: string | undefined): Observable<TypeTechnology[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<TypeTechnology[]>(url);
  }

  getById(id: number): Observable<TypeTechnology> {
    let url = this.apiUrl + id;
    return this.http.get<TypeTechnology>(url);
  }

  insert(objeto: TypeTechnology): Observable<TypeTechnology> {
    return this.http.post<TypeTechnology>(this.apiUrl, objeto);
  }

  update(objeto: TypeTechnology): Observable<TypeTechnology> {
    return this.http.put<TypeTechnology>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
