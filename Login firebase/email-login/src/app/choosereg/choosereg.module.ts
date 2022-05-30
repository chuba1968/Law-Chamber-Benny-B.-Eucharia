import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseregPageRoutingModule } from './choosereg-routing.module';

import { ChooseregPage } from './choosereg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseregPageRoutingModule
  ],
  declarations: [ChooseregPage]
})
export class ChooseregPageModule {}
