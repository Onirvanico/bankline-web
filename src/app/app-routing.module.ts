import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrentistaComponent } from './components/correntista/correntista.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { MovimentacoesListComponent } from './components/movimentacoes-list/movimentacoes-list.component';

const routes: Routes = [
 { path: 'movimentacoes', component: MovimentacoesListComponent },
 { path: 'movimentacao-new', component: MovimentacaoNewComponent },
 { path: 'correntista', component: CorrentistaComponent },
 { path: '', redirectTo: 'movimentacoes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
