import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Modality } from '../model/modality';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class ModalityService implements ICrudService<Modality> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/modality/';

  get(termoBusca?: string | undefined): Observable<Modality[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Modality[]>(url);
  }

  getById(id: number): Observable<Modality> {
    let url = this.apiUrl + id;
    return this.http.get<Modality>(url);
  }

  insert(objeto: Partial<Modality>): Observable<Modality> {
    return this.http.post<Modality>(this.apiUrl, objeto)//.pipe(first);
  }

  update(objeto: Modality): Observable<Modality> {
    return this.http.put<Modality>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
