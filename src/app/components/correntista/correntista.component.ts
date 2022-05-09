import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';

@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.css']
})
export class CorrentistaComponent implements OnInit {

  cpf: any;
  nome: any;
  correntistas: any;

  constructor(private correntistaService: CorrentistaService) { }

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

  save(): void {
    const correntista = {
      cpf: this.cpf,
      nome: this.nome
    }
    console.log(correntista);

    this.correntistaService.create(correntista)
      .subscribe({
        next: (response: any) => {
            console.log(response);
            this.showCorrentistas();
        },
        error: (err:any) => console.log(err)
        
      })
  }

}
