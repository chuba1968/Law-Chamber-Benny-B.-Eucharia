import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyregrequirmentsPage } from './companyregrequirments.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyregrequirmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyregrequirmentsPageRoutingModule {}
