import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Laboratory } from '../model/laboratory';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class LaboratoryService implements ICrudService<Laboratory> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/laboratory/';

  get(termoBusca?: string | undefined): Observable<Laboratory[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Laboratory[]>(url);
  }

  getById(id: number): Observable<Laboratory> {
    let url = this.apiUrl + id;
    return this.http.get<Laboratory>(url);
  }

  insert(objeto: Laboratory): Observable<Laboratory> {
    return this.http.post<Laboratory>(this.apiUrl, objeto);
  }

  update(objeto: Laboratory): Observable<Laboratory> {
    return this.http.put<Laboratory>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
