import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenmillionPageRoutingModule } from './tenmillion-routing.module';

import { TenmillionPage } from './tenmillion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenmillionPageRoutingModule
  ],
  declarations: [TenmillionPage]
})
export class TenmillionPageModule {}
