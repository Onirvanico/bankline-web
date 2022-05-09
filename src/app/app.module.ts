import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentacoesListComponent } from './components/movimentacoes-list/movimentacoes-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CorrentistaComponent } from './components/correntista/correntista.component';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    MovimentacoesListComponent,
    MovimentacaoNewComponent,
    CorrentistaComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CurrencyMaskModule
  ],
  providers: [{provide: LOCALE_ID, useValue:"pt-BR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
