import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[] = [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [] = [];
  }

  get transferencias(): any {
    return this.listaTransferencia;
  }

  public dados(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  public adicionar(transferencia: any): Observable<Transferencia> {
    this.formatar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private formatar(transferencia: any) {
    transferencia.data = new Date();
  }
}
