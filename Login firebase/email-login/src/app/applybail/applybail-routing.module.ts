import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplybailPage } from './applybail.page';

const routes: Routes = [
  {
    path: '',
    component: ApplybailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplybailPageRoutingModule {}
