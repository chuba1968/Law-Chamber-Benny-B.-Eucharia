import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriminaldefencePage } from './criminaldefence.page';

const routes: Routes = [
  {
    path: '',
    component: CriminaldefencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriminaldefencePageRoutingModule {}
