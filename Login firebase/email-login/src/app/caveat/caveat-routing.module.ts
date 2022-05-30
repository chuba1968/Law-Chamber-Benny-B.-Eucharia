import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaveatPage } from './caveat.page';

const routes: Routes = [
  {
    path: '',
    component: CaveatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaveatPageRoutingModule {}
