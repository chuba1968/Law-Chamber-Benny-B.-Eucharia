import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftingPageRoutingModule } from './drafting-routing.module';

import { DraftingPage } from './drafting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftingPageRoutingModule
  ],
  declarations: [DraftingPage]
})
export class DraftingPageModule {}
