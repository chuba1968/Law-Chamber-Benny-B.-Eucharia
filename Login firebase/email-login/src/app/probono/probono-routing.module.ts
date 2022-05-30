import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProbonoPage } from './probono.page';

const routes: Routes = [
  {
    path: '',
    component: ProbonoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProbonoPageRoutingModule {}
