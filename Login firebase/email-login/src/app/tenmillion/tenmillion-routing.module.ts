import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenmillionPage } from './tenmillion.page';

const routes: Routes = [
  {
    path: '',
    component: TenmillionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenmillionPageRoutingModule {}
