import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SocioeconomicInformation } from '../model/socioeconomicInformation';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class SocioeconomicInformationService implements ICrudService<SocioeconomicInformation> {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/socioeconomicinformation/';

  get(termoBusca?: string | undefined): Observable<SocioeconomicInformation[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<SocioeconomicInformation[]>(url);
  }

  getById(id: number): Observable<SocioeconomicInformation> {
    let url = this.apiUrl + id;
    return this.http.get<SocioeconomicInformation>(url);
  }

  insert(objeto: SocioeconomicInformation): Observable<SocioeconomicInformation> {
    return this.http.post<SocioeconomicInformation>(this.apiUrl, objeto);
  }

  update(objeto: SocioeconomicInformation): Observable<SocioeconomicInformation> {
    return this.http.put<SocioeconomicInformation>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
