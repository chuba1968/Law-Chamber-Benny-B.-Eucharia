import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoopPage } from './coop.page';

const routes: Routes = [
  {
    path: '',
    component: CoopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoopPageRoutingModule {}
