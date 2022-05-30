import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LettersofadministrationPageRoutingModule } from './lettersofadministration-routing.module';

import { LettersofadministrationPage } from './lettersofadministration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LettersofadministrationPageRoutingModule
  ],
  declarations: [LettersofadministrationPage]
})
export class LettersofadministrationPageModule {}
