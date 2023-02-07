import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ICrudService } from '../model/i-crud-service';
import { Teacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService implements ICrudService<Teacher> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/teacher/';

  get(termoBusca?: string | undefined): Observable<Teacher[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Teacher[]>(url);
  }

  getById(id: number): Observable<Teacher> {
    let url = this.apiUrl + id;
    return this.http.get<Teacher>(url);
  }

  insert(objeto: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, objeto);
  }

  update(objeto: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
