import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NnamdiPage } from './nnamdi.page';

const routes: Routes = [
  {
    path: '',
    component: NnamdiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NnamdiPageRoutingModule {}
