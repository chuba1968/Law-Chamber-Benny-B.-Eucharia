import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Proceed5millionPageRoutingModule } from './proceed5million-routing.module';

import { Proceed5millionPage } from './proceed5million.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Proceed5millionPageRoutingModule
  ],
  declarations: [Proceed5millionPage]
})
export class Proceed5millionPageModule {}
