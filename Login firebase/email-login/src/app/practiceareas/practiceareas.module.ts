import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeareasPageRoutingModule } from './practiceareas-routing.module';

import { PracticeareasPage } from './practiceareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeareasPageRoutingModule
  ],
  declarations: [PracticeareasPage]
})
export class PracticeareasPageModule {}
