import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimplewillPage } from './simplewill.page';

const routes: Routes = [
  {
    path: '',
    component: SimplewillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimplewillPageRoutingModule {}
