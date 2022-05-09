import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = "https://nirvanico-bankline-api.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  constructor(private httClient: HttpClient) { }

  getList(): Observable<any> {
    return this.httClient.get<any>(`${BASE_URL}correntistas`)
  }

  create(correntista: any): Observable<any> {
    return this.httClient.post(`${BASE_URL}correntistas`, correntista);
  }
}
