import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  public valor: number;
  public destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  public transferir(): void {
    // console.log('Solicitada nova transferĂȘncia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        // console.log(resultado);
        this.limparCampo();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  public limparCampo(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
