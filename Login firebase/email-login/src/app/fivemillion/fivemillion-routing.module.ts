import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FivemillionPage } from './fivemillion.page';

const routes: Routes = [
  {
    path: '',
    component: FivemillionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FivemillionPageRoutingModule {}
