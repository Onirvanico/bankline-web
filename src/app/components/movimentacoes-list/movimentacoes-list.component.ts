import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacoesService } from 'src/app/services/movimentacoes.service';

@Component({
  selector: 'app-movimentacoes-list',
  templateUrl: './movimentacoes-list.component.html',
  styleUrls: ['./movimentacoes-list.component.css']
})
export class MovimentacoesListComponent implements OnInit {

  movimentacoes: any;
  correntistas: any;
  correntista: any={};
  
  constructor(private service: MovimentacoesService, private correntistaService: CorrentistaService) { }

  ngOnInit(): void {
    this.showCorrentistas();
  }

  showCorrentistas() {
    this.correntistaService.getList()
      .subscribe({
        next: (data: any) => {
            this.correntistas = data;
        },
        error: (err: any) => console.log(err)
        
      })
  }

  getListMovimentacoes(): void {
    this.service.getList()
      .subscribe({
        next: (data: any) => {
          this.movimentacoes = data;  
          console.log(this.movimentacoes);
        },
        error: (err: any) => {
          console.log(err);
        }
      })
  }
  getMovimentacoes(): void {
    this.service.findById(this.correntista.id)
      .subscribe({
        next: (data: any) => {
          this.movimentacoes = data;  
          console.log(this.movimentacoes);
        },
        error: (err: any) => {
          console.log(err);
        }
      })
  }

  

}
