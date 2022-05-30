import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeareasPage } from './practiceareas.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeareasPageRoutingModule {}
