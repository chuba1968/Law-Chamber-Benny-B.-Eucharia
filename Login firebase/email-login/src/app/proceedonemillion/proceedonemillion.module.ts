import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedonemillionPageRoutingModule } from './proceedonemillion-routing.module';

import { ProceedonemillionPage } from './proceedonemillion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedonemillionPageRoutingModule
  ],
  declarations: [ProceedonemillionPage]
})
export class ProceedonemillionPageModule {}
