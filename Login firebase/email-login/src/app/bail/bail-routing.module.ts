import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BailPage } from './bail.page';

const routes: Routes = [
  {
    path: '',
    component: BailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BailPageRoutingModule {}
