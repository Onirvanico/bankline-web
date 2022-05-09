import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = "https://nirvanico-bankline-api.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class MovimentacoesService {

  constructor(private httClient: HttpClient) { }

  getList(): Observable<any> {
    return this.httClient.get(`${BASE_URL}movimentacoes`);
  }

  findById(idConta: any): Observable<any> {
    return this.httClient.get(`${BASE_URL}movimentacoes/${idConta}`);
  }

  create(movimentacao: any): Observable<any> {
    return this.httClient.post(`${BASE_URL}movimentacoes`, movimentacao);
  }
}
