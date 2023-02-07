import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupTask } from '../model/groupTask';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class GroupTaskService implements ICrudService<GroupTask> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/grouptask/';

  get(termoBusca?: string | undefined): Observable<GroupTask[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<GroupTask[]>(url);
  }

  getById(id: number): Observable<GroupTask> {
    let url = this.apiUrl + id;
    return this.http.get<GroupTask>(url);
  }

  insert(objeto: GroupTask): Observable<GroupTask> {
    return this.http.post<GroupTask>(this.apiUrl, objeto);
  }

  update(objeto: GroupTask): Observable<GroupTask> {
    return this.http.put<GroupTask>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
