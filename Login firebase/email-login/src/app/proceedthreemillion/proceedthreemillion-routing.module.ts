import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceedthreemillionPage } from './proceedthreemillion.page';

const routes: Routes = [
  {
    path: '',
    component: ProceedthreemillionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceedthreemillionPageRoutingModule {}
