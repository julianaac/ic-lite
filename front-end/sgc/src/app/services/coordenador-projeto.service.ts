import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoordenadorProjeto } from '../model/coordenador-projeto';
import { ICrudService } from './../model/i-crud-service';

@Injectable({
  providedIn: 'root',
})
export class CoordenadorProjetoService implements ICrudService<CoordenadorProjeto> {
  constructor(private http: HttpClient) {}
  getById(id: number): Observable<CoordenadorProjeto> {
    throw new Error('Method not implemented.');
  }
  insert(objeto: CoordenadorProjeto): Observable<CoordenadorProjeto> {
    throw new Error('Method not implemented.');
  }
  update(objeto: CoordenadorProjeto): Observable<CoordenadorProjeto> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

  apiUrl: string = environment.API_URL + '/viewcoordenadorprojeto/';

  get(termoBusca?: string | undefined): Observable<CoordenadorProjeto[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<CoordenadorProjeto[]>(url);
  }
}
