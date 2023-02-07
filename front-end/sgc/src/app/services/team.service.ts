import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../model/team';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TeamService implements ICrudService<Team> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/team/';

  get(termoBusca?: string | undefined): Observable<Team[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Team[]>(url);
  }

  getById(id: number): Observable<Team> {
    let url = this.apiUrl + id;
    return this.http.get<Team>(url);
  }

  insert(objeto: Team): Observable<Team> {
    return this.http.post<Team>(this.apiUrl, objeto);
  }

  update(objeto: Team): Observable<Team> {
    return this.http.put<Team>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
