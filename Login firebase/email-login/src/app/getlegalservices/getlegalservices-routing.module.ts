import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetlegalservicesPage } from './getlegalservices.page';

const routes: Routes = [
  {
    path: '',
    component: GetlegalservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetlegalservicesPageRoutingModule {}
