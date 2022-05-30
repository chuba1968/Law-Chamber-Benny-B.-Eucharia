import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimplyprobatePageRoutingModule } from './simplyprobate-routing.module';

import { SimplyprobatePage } from './simplyprobate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimplyprobatePageRoutingModule
  ],
  declarations: [SimplyprobatePage]
})
export class SimplyprobatePageModule {}
