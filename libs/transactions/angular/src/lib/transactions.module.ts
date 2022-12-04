import { NgModule } from '@angular/core';
import { TransactionsPageModule } from './transactions-page/transactions-page.module';
import { TransactionsRoutingModule } from './transactions-routing.module';

@NgModule({
  imports: [TransactionsRoutingModule, TransactionsPageModule],
})
export class TransactionsModule {}
