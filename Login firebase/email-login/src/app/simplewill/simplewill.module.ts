import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimplewillPageRoutingModule } from './simplewill-routing.module';

import { SimplewillPage } from './simplewill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimplewillPageRoutingModule
  ],
  declarations: [SimplewillPage]
})
export class SimplewillPageModule {}
