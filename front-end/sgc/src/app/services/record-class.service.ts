import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecordClass } from '../model/recordClass';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class RecordClassService implements ICrudService<RecordClass> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/recordclass/';

  get(termoBusca?: string | undefined): Observable<RecordClass[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<RecordClass[]>(url);
  }

  getById(id: number): Observable<RecordClass> {
    let url = this.apiUrl + id;
    return this.http.get<RecordClass>(url);
  }

  insert(objeto: RecordClass): Observable<RecordClass> {
    return this.http.post<RecordClass>(this.apiUrl, objeto);
  }

  update(objeto: RecordClass): Observable<RecordClass> {
    return this.http.put<RecordClass>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
