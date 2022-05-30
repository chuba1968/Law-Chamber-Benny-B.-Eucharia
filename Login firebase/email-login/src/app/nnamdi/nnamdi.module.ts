import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NnamdiPageRoutingModule } from './nnamdi-routing.module';

import { NnamdiPage } from './nnamdi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NnamdiPageRoutingModule
  ],
  declarations: [NnamdiPage]
})
export class NnamdiPageModule {}
