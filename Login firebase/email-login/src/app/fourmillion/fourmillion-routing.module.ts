import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourmillionPage } from './fourmillion.page';

const routes: Routes = [
  {
    path: '',
    component: FourmillionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourmillionPageRoutingModule {}
