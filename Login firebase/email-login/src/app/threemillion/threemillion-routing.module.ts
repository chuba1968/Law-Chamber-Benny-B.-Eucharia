import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreemillionPage } from './threemillion.page';

const routes: Routes = [
  {
    path: '',
    component: ThreemillionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreemillionPageRoutingModule {}
