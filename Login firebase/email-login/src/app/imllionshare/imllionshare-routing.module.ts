import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImllionsharePage } from './imllionshare.page';

const routes: Routes = [
  {
    path: '',
    component: ImllionsharePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImllionsharePageRoutingModule {}
