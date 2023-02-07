import { StatusEquipment } from './../model/statusEquipment';
import { HttpClient } from '@angular/common/http';
import { ICrudService } from './../model/i-crud-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusEquipmentService implements ICrudService<StatusEquipment> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/statusequipment/';
  get(termoBusca?: string | undefined): Observable<StatusEquipment[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<StatusEquipment[]>(url);
  }
  getById(id: number): Observable<StatusEquipment> {
    let url = this.apiUrl + id;
    return this.http.get<StatusEquipment>(url);
  }
  insert(objeto: StatusEquipment): Observable<StatusEquipment> {
    return this.http.post<StatusEquipment>(this.apiUrl, objeto);
  }
  update(objeto: StatusEquipment): Observable<StatusEquipment> {
    return this.http.put<StatusEquipment>(this.apiUrl, objeto);
  }
  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
