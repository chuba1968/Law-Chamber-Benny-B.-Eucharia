import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Proceed4millionPage } from './proceed4million.page';

const routes: Routes = [
  {
    path: '',
    component: Proceed4millionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Proceed4millionPageRoutingModule {}
