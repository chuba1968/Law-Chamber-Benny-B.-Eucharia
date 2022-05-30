import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BailPageRoutingModule } from './bail-routing.module';

import { BailPage } from './bail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BailPageRoutingModule
  ],
  declarations: [BailPage]
})
export class BailPageModule {}
