import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TechnicalSupport } from '../model/technicalSupport';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TechnicalSupportService implements ICrudService<TechnicalSupport> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/technicalsupport/';

  get(termoBusca?: string | undefined): Observable<TechnicalSupport[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<TechnicalSupport[]>(url);
  }

  getById(id: number): Observable<TechnicalSupport> {
    let url = this.apiUrl + id;
    return this.http.get<TechnicalSupport>(url);
  }

  insert(objeto: TechnicalSupport): Observable<TechnicalSupport> {
    return this.http.post<TechnicalSupport>(this.apiUrl, objeto);
  }

  update(objeto: TechnicalSupport): Observable<TechnicalSupport> {
    return this.http.put<TechnicalSupport>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
  nextStatus(id: number): Observable<TechnicalSupport> {
    let url = this.apiUrl + 'status/next/' + id;
    return this.http.put<TechnicalSupport>(url, null);
  }
  previousStatus(id: number): Observable<TechnicalSupport> {
    let url = this.apiUrl + 'status/previous/' + id;
    return this.http.put<TechnicalSupport>(url, null);
  }
}
