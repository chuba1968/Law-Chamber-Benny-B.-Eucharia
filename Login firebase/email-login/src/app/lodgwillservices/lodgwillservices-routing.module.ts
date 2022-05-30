import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgwillservicesPage } from './lodgwillservices.page';

const routes: Routes = [
  {
    path: '',
    component: LodgwillservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgwillservicesPageRoutingModule {}
