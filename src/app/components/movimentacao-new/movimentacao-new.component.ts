import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacoesService } from 'src/app/services/movimentacoes.service';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {

  correntistas: any;
  correntista: any;
  descricao: any;
  dataHora: any;
  valor: any;
  tipoMovimentacao: any;

  constructor(private movimentacoesService: MovimentacoesService,
              private correntistasService: CorrentistaService) { }

  ngOnInit(): void {
    this.showCorrentistas();
  }

  showCorrentistas() {
    this.correntistasService.getList()
      .subscribe({
        next: (data: any) => {
            this.correntistas = data;
        },
        error: (err: any) => console.log(err)
        
      })
  }

  save(): void {
    console.log(this.correntista);
    const movimentacao = {
      valor:this.valor,
      descricao:this.descricao,
      tipoMovimentacao:this.tipoMovimentacao,
      idConta:this.correntista.id,
      dataHora:this.dataHora
    }
    console.log(movimentacao);
    this.movimentacoesService.create(movimentacao)
      .subscribe(
         (response: any) => console.log(releaseEvents),
         (error: any) => console.log(error))
  }

}
