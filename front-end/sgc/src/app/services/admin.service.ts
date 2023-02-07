import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../model/admin';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class AdminService implements ICrudService<Admin> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/admin/';

  get(termoBusca?: string | undefined): Observable<Admin[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Admin[]>(url);
  }

  getById(id: number): Observable<Admin> {
    let url = this.apiUrl + id;
    return this.http.get<Admin>(url);
  }

  insert(objeto: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl, objeto);
  }

  update(objeto: Admin): Observable<Admin> {
    return this.http.put<Admin>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
