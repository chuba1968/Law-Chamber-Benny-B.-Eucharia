import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LettersofadministrationPage } from './lettersofadministration.page';

const routes: Routes = [
  {
    path: '',
    component: LettersofadministrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LettersofadministrationPageRoutingModule {}
