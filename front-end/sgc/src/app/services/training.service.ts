import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from '../model/training';
import { ICrudService } from '../model/i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class TrainingService implements ICrudService<Training> {

  constructor(
    private http: HttpClient
    ) { }
  apiUrl: string = environment.API_URL + '/training/';



  get(termoBusca?: string | undefined): Observable<Training[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Training[]>(url);
  }
  getById(id: number): Observable<Training> {
    let url = this.apiUrl + id;
    return this.http.get<Training>(url);
  }
  insert(objeto: Training): Observable<Training> {
    return this.http.post<Training>(this.apiUrl, objeto);
  }
  update(objeto: Training): Observable<Training> {
    return this.http.put<Training>(this.apiUrl, objeto);
  }
  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }

}
