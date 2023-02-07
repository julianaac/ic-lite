import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICrudService } from './../model/i-crud-service';
import { Injectable } from '@angular/core';
import { Equipment } from '../model/equipment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService implements ICrudService<Equipment> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/equipment/'
  get(termoBusca?: string | undefined): Observable<Equipment[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Equipment[]>(url);
  }
  getById(id: number): Observable<Equipment> {
    let url = this.apiUrl + id;
    return this.http.get<Equipment>(url);
  }
  insert(objeto: Equipment): Observable<Equipment> {
    return this.http.post<Equipment>(this.apiUrl, objeto);
  }
  update(objeto: Equipment): Observable<Equipment> {
    return this.http.put<Equipment>(this.apiUrl, objeto);
  }
  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
