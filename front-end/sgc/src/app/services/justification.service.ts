import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Justification } from '../model/justification';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class JustificationService implements ICrudService<Justification> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/justification/';

  get(termoBusca?: string | undefined): Observable<Justification[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Justification[]>(url);
  }

  getById(id: number): Observable<Justification> {
    let url = this.apiUrl + id;
    return this.http.get<Justification>(url);
  }

  insert(objeto: Justification): Observable<Justification> {
    return this.http.post<Justification>(this.apiUrl, objeto);
  }

  update(objeto: Justification): Observable<Justification> {
    return this.http.put<Justification>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
  
}
