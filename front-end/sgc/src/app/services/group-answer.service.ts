import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupAnswer } from '../model/groupAnswer';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class GroupAnswerService implements ICrudService<GroupAnswer> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/groupanswer/';

  get(termoBusca?: string | undefined): Observable<GroupAnswer[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<GroupAnswer[]>(url);
  }

  getById(id: number): Observable<GroupAnswer> {
    let url = this.apiUrl + id;
    return this.http.get<GroupAnswer>(url);
  }

  insert(objeto: GroupAnswer): Observable<GroupAnswer> {
    return this.http.post<GroupAnswer>(this.apiUrl, objeto);
  }

  update(objeto: GroupAnswer): Observable<GroupAnswer> {
    return this.http.put<GroupAnswer>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
  nextStatus(id: number): Observable<GroupAnswer> {
    let url = this.apiUrl + 'status/next/' + id;
    return this.http.put<GroupAnswer>(url, null);
  }
  previousStatus(id: number): Observable<GroupAnswer> {
    let url = this.apiUrl + 'status/previous/' + id;
    return this.http.put<GroupAnswer>(url, null);
  }
}
