import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgedetachwillPage } from './lodgedetachwill.page';

const routes: Routes = [
  {
    path: '',
    component: LodgedetachwillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgedetachwillPageRoutingModule {}
