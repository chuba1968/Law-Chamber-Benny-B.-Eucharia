import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CooperatePageRoutingModule } from './cooperate-routing.module';

import { CooperatePage } from './cooperate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CooperatePageRoutingModule
  ],
  declarations: [CooperatePage]
})
export class CooperatePageModule {}
