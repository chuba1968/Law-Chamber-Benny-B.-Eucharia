import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseregPage } from './choosereg.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseregPageRoutingModule {}
