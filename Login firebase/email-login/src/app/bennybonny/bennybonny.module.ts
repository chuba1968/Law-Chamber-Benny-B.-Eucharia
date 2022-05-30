import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BennybonnyPageRoutingModule } from './bennybonny-routing.module';

import { BennybonnyPage } from './bennybonny.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BennybonnyPageRoutingModule
  ],
  declarations: [BennybonnyPage]
})
export class BennybonnyPageModule {}
