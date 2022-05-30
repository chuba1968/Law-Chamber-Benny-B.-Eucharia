import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedbusinesnamePageRoutingModule } from './proceedbusinesname-routing.module';

import { ProceedbusinesnamePage } from './proceedbusinesname.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedbusinesnamePageRoutingModule
  ],
  declarations: [ProceedbusinesnamePage]
})
export class ProceedbusinesnamePageModule {}
