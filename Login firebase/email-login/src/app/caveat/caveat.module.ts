import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaveatPageRoutingModule } from './caveat-routing.module';

import { CaveatPage } from './caveat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaveatPageRoutingModule
  ],
  declarations: [CaveatPage]
})
export class CaveatPageModule {}
