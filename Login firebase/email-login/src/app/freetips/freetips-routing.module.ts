import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreetipsPage } from './freetips.page';

const routes: Routes = [
  {
    path: '',
    component: FreetipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreetipsPageRoutingModule {}
