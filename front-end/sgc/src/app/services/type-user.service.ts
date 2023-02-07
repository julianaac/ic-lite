import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeUser } from '../model/typeUser';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TypeUserService implements ICrudService<TypeUser> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/typeuser/';

  get(termoBusca?: string | undefined): Observable<TypeUser[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<TypeUser[]>(url);
  }

  getById(id: number): Observable<TypeUser> {
    let url = this.apiUrl + id;
    return this.http.get<TypeUser>(url);
  }

  insert(objeto: TypeUser): Observable<TypeUser> {
    return this.http.post<TypeUser>(this.apiUrl, objeto);
  }

  update(objeto: TypeUser): Observable<TypeUser> {
    return this.http.put<TypeUser>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
