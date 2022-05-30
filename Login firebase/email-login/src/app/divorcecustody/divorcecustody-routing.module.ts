import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivorcecustodyPage } from './divorcecustody.page';

const routes: Routes = [
  {
    path: '',
    component: DivorcecustodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivorcecustodyPageRoutingModule {}
