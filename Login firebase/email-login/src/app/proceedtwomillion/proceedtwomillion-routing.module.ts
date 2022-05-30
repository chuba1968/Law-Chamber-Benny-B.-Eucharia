import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceedtwomillionPage } from './proceedtwomillion.page';

const routes: Routes = [
  {
    path: '',
    component: ProceedtwomillionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceedtwomillionPageRoutingModule {}
