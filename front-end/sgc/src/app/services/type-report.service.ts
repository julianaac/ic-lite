import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeReport } from '../model/typeReport';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TypeReportService implements ICrudService<TypeReport> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/typereport/';

  get(termoBusca?: string | undefined): Observable<TypeReport[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<TypeReport[]>(url);
  }

  getById(id: number): Observable<TypeReport> {
    let url = this.apiUrl + id;
    return this.http.get<TypeReport>(url);
  }

  insert(objeto: TypeReport): Observable<TypeReport> {
    return this.http.post<TypeReport>(this.apiUrl, objeto);
  }

  update(objeto: TypeReport): Observable<TypeReport> {
    return this.http.put<TypeReport>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
