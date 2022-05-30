import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PowerofattorneyPage } from './powerofattorney.page';

const routes: Routes = [
  {
    path: '',
    component: PowerofattorneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PowerofattorneyPageRoutingModule {}
