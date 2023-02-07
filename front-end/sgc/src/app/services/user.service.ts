import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../model/user';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements ICrudService<User> {

  constructor(
    private http: HttpClient
  ) { }
  apiUrl: string = environment.API_URL + '/user/'; //depois colocar '/config/user/'

  get(termoBusca?: string | undefined): Observable<User[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<User[]>(url);
  }
  getCordenador(): Observable<User[]> {
    let url = this.apiUrl+'busca/cor';
    return this.http.get<User[]>(url);
  }
  getById(id: number): Observable<User> {
    let url = this.apiUrl + id;
    return this.http.get<User>(url);
  }
  insert(objeto: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, objeto);
  }
  update(objeto: User): Observable<User> {
    return this.http.put<User>(this.apiUrl, objeto);
  }
  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
