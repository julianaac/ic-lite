import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskSprint } from '../model/taskSprint';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TaskSprintService implements ICrudService<TaskSprint> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/tasksprint/';

  get(termoBusca?: string | undefined): Observable<TaskSprint[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<TaskSprint[]>(url);
  }

  getById(id: number): Observable<TaskSprint> {
    let url = this.apiUrl + id;
    return this.http.get<TaskSprint>(url);
  }

  insert(objeto: TaskSprint): Observable<TaskSprint> {
    return this.http.post<TaskSprint>(this.apiUrl, objeto);
  }

  update(objeto: TaskSprint): Observable<TaskSprint> {
    return this.http.put<TaskSprint>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
