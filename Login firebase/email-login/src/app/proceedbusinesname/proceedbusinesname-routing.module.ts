import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceedbusinesnamePage } from './proceedbusinesname.page';

const routes: Routes = [
  {
    path: '',
    component: ProceedbusinesnamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceedbusinesnamePageRoutingModule {}
