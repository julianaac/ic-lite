import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../model/task';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements ICrudService<Task> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/task/';

  get(termoBusca?: string | undefined): Observable<Task[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Task[]>(url);
  }

  getById(id: number): Observable<Task> {
    let url = this.apiUrl + id;
    return this.http.get<Task>(url);
  }

  insert(objeto: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, objeto);
  }

  update(objeto: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
  nextStatus(id: number): Observable<Task> {
    let url = this.apiUrl + 'status/next/' + id;
    return this.http.put<Task>(url, null);
  }
  previousStatus(id: number): Observable<Task> {
    let url = this.apiUrl + 'status/previous/' + id;
    return this.http.put<Task>(url, null);
  }
}
