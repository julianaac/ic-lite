import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EquipmentLocation } from '../model/equipmentLocation';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class EquipmentLocationService implements ICrudService<EquipmentLocation> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/equipmentlocation/';

  get(termoBusca?: string | undefined): Observable<EquipmentLocation[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<EquipmentLocation[]>(url);
  }

  getById(id: number): Observable<EquipmentLocation> {
    let url = this.apiUrl + id;
    return this.http.get<EquipmentLocation>(url);
  }

  insert(objeto: EquipmentLocation): Observable<EquipmentLocation> {
    return this.http.post<EquipmentLocation>(this.apiUrl, objeto);
  }

  update(objeto: EquipmentLocation): Observable<EquipmentLocation> {
    return this.http.put<EquipmentLocation>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
