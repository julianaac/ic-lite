import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeNotice } from '../model/typeNotice';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TypeNoticeService implements ICrudService<TypeNotice> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/typenotice/';

  get(termoBusca?: string | undefined): Observable<TypeNotice[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<TypeNotice[]>(url);
  }

  getById(id: number): Observable<TypeNotice> {
    let url = this.apiUrl + id;
    return this.http.get<TypeNotice>(url);
  }

  insert(objeto: TypeNotice): Observable<TypeNotice> {
    return this.http.post<TypeNotice>(this.apiUrl, objeto);
  }

  update(objeto: TypeNotice): Observable<TypeNotice> {
    return this.http.put<TypeNotice>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
