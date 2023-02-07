import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TechnicalKnowledge } from '../model/technicalKnowledge';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TechnicalKnowledgeService implements ICrudService<TechnicalKnowledge> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/technicalknowledge/';

  get(termoBusca?: string | undefined): Observable<TechnicalKnowledge[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<TechnicalKnowledge[]>(url);
  }

  getById(id: number): Observable<TechnicalKnowledge> {
    let url = this.apiUrl + id;
    return this.http.get<TechnicalKnowledge>(url);
  }

  insert(objeto: TechnicalKnowledge): Observable<TechnicalKnowledge> {
    return this.http.post<TechnicalKnowledge>(this.apiUrl, objeto);
  }

  update(objeto: TechnicalKnowledge): Observable<TechnicalKnowledge> {
    return this.http.put<TechnicalKnowledge>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
