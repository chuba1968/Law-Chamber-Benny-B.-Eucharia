import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimplyprobatePage } from './simplyprobate.page';

const routes: Routes = [
  {
    path: '',
    component: SimplyprobatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimplyprobatePageRoutingModule {}
