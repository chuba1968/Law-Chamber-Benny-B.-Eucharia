import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivorcecustodyPageRoutingModule } from './divorcecustody-routing.module';

import { DivorcecustodyPage } from './divorcecustody.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivorcecustodyPageRoutingModule
  ],
  declarations: [DivorcecustodyPage]
})
export class DivorcecustodyPageModule {}
