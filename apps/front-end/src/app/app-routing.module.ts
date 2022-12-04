import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'transactions',
    loadChildren: () =>
      import('@didactic-octo-happiness/transactions/angular').then(
        (m) => m.TransactionsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'transactions',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
