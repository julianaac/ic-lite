import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TemplateReport } from '../model/templateReport';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class TemplateReportService implements ICrudService<TemplateReport> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/templatereport/';

  get(termoBusca?: string | undefined): Observable<TemplateReport[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<TemplateReport[]>(url);
  }

  getById(id: number): Observable<TemplateReport> {
    let url = this.apiUrl + id;
    return this.http.get<TemplateReport>(url);
  }

  insert(objeto: TemplateReport): Observable<TemplateReport> {
    return this.http.post<TemplateReport>(this.apiUrl, objeto);
  }

  update(objeto: TemplateReport): Observable<TemplateReport> {
    return this.http.put<TemplateReport>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
