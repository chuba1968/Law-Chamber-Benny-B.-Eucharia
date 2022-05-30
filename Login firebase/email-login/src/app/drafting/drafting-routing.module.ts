import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftingPage } from './drafting.page';

const routes: Routes = [
  {
    path: '',
    component: DraftingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftingPageRoutingModule {}
