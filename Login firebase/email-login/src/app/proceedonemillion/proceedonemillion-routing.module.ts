import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceedonemillionPage } from './proceedonemillion.page';

const routes: Routes = [
  {
    path: '',
    component: ProceedonemillionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceedonemillionPageRoutingModule {}
