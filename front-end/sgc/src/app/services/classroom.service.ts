import { Classroom } from 'src/app/model/classroom';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class ClassroomService implements ICrudService<Classroom> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/classroom/';

  get(termoBusca?: string | undefined): Observable<Classroom[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Classroom[]>(url);
  }

  getById(id: number): Observable<Classroom> {
    let url = this.apiUrl + id;
    return this.http.get<Classroom>(url);
  }

  insert(objeto: Partial<Classroom>): Observable<Classroom> {
    return this.http.post<Classroom>(this.apiUrl, objeto);
  }

  update(objeto: Classroom): Observable<Classroom> {
    return this.http.put<Classroom>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
