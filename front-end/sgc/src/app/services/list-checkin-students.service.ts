import { CheckinStudent } from './../model/checkin-students';
import { ICrudService } from './../model/i-crud-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListCheckinStudentsService implements ICrudService<CheckinStudent>{
  constructor(private http: HttpClient) {}
  apiUrl: string = environment.API_URL + '/-m /';
  subUrl: string = environment.API_URL + '/viewcurrentdiscipline/';

  get(termoBusca?: string | undefined): Observable<CheckinStudent[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<CheckinStudent[]>(url);
  }
  getById(id: number): Observable<CheckinStudent> {
    let url = this.apiUrl + id;
    return this.http.get<CheckinStudent>(url);
  }

  insert(objeto: CheckinStudent): Observable<CheckinStudent> {
    throw new Error('Method not implemented.');
  }
  update(objeto: CheckinStudent): Observable<CheckinStudent> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
