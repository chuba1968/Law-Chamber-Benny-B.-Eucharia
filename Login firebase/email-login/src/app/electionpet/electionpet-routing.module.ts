import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectionpetPage } from './electionpet.page';

const routes: Routes = [
  {
    path: '',
    component: ElectionpetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectionpetPageRoutingModule {}
