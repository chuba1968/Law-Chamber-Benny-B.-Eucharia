import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BennybonnyPage } from './bennybonny.page';

const routes: Routes = [
  {
    path: '',
    component: BennybonnyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BennybonnyPageRoutingModule {}
