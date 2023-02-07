import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Report } from '../model/report';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class ReportService implements ICrudService<Report> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/report/';

  get(termoBusca?: string | undefined): Observable<Report[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Report[]>(url);
  }

  getById(id: number): Observable<Report> {
    let url = this.apiUrl + id;
    return this.http.get<Report>(url);
  }

  updateStatus(id: number): Observable<Report> {
    let url = this.apiUrl + 'status/next/' + id;
    return this.http.put<Report>(url, null);
  }

  getHorarios(id: number, data: string): Observable<string[]> {
    let url = this.apiUrl + 'horarios/profissional/' + id + '/data/' + data;
    return this.http.get<string[]>(url);
  }

  insert(objeto: Report): Observable<Report> {
    return this.http.post<Report>(this.apiUrl, objeto);
  }

  update(objeto: Report): Observable<Report> {
    return this.http.put<Report>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }

  nextStatus(id: number): Observable<Report> {
    let url = this.apiUrl + 'status/next/' + id;
    return this.http.put<Report>(url, null);
  }
  previousStatus(id: number): Observable<Report> {
    let url = this.apiUrl + 'status/previous/' + id;
    return this.http.put<Report>(url, null);
  }
}
