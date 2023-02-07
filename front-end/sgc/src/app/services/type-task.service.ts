import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeTask } from '../model/typeTask';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TypeTaskService implements ICrudService<TypeTask> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/typetask/';

  get(termoBusca?: string | undefined): Observable<TypeTask[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<TypeTask[]>(url);
  }

  getById(id: number): Observable<TypeTask> {
    let url = this.apiUrl + id;
    return this.http.get<TypeTask>(url);
  }

  insert(objeto: TypeTask): Observable<TypeTask> {
    return this.http.post<TypeTask>(this.apiUrl, objeto);
  }

  update(objeto: TypeTask): Observable<TypeTask> {
    return this.http.put<TypeTask>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
