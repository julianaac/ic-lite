import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notice } from '../model/notice';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class NoticeService implements ICrudService<Notice> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/notice/';

  get(termoBusca?: string | undefined): Observable<Notice[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Notice[]>(url);
  }

  getById(id: number): Observable<Notice> {
    let url = this.apiUrl + id;
    return this.http.get<Notice>(url);
  }

  insert(objeto: Notice): Observable<Notice> {
    return this.http.post<Notice>(this.apiUrl, objeto);
  }

  update(objeto: Notice): Observable<Notice> {
    return this.http.put<Notice>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
