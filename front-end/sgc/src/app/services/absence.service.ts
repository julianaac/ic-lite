import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Absence } from '../model/absence';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService implements ICrudService<Absence> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/absence/';

  get(termoBusca?: string | undefined): Observable<Absence[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Absence[]>(url);
  }

  getById(id: number): Observable<Absence> {
    let url = this.apiUrl + id;
    return this.http.get<Absence>(url);
  }

  insert(objeto: Absence): Observable<Absence> {
    return this.http.post<Absence>(this.apiUrl, objeto);
  }

  update(objeto: Absence): Observable<Absence> {
    return this.http.put<Absence>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
