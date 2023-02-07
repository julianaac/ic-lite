import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GradeMemberGroup } from '../model/gradeMemberGroup';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class GradeMemberGroupService implements ICrudService<GradeMemberGroup> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/grademembergroup/';

  get(termoBusca?: string | undefined): Observable<GradeMemberGroup[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<GradeMemberGroup[]>(url);
  }

  getById(id: number): Observable<GradeMemberGroup> {
    let url = this.apiUrl + id;
    return this.http.get<GradeMemberGroup>(url);
  }

  insert(objeto: GradeMemberGroup): Observable<GradeMemberGroup> {
    return this.http.post<GradeMemberGroup>(this.apiUrl, objeto);
  }

  update(objeto: GradeMemberGroup): Observable<GradeMemberGroup> {
    return this.http.put<GradeMemberGroup>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
