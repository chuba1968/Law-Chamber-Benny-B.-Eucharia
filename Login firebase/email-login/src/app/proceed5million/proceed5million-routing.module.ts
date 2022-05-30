import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Proceed5millionPage } from './proceed5million.page';

const routes: Routes = [
  {
    path: '',
    component: Proceed5millionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Proceed5millionPageRoutingModule {}
