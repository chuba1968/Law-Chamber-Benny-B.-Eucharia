import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Proceed4millionPageRoutingModule } from './proceed4million-routing.module';

import { Proceed4millionPage } from './proceed4million.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Proceed4millionPageRoutingModule
  ],
  declarations: [Proceed4millionPage]
})
export class Proceed4millionPageModule {}
