import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectionpetitionPage } from './electionpetition.page';

const routes: Routes = [
  {
    path: '',
    component: ElectionpetitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectionpetitionPageRoutingModule {}
