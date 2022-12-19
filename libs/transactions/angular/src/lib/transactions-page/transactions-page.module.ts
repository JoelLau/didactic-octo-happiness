import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionsPageComponent } from './transactions-page.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TransactionsPageComponent],
  exports: [TransactionsPageComponent],
})
export class TransactionsPageModule {}
