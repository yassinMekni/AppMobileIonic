import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncourPageRoutingModule } from './encour-routing.module';

import { EncourPage } from './encour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncourPageRoutingModule
  ],
  declarations: [EncourPage]
})
export class EncourPageModule {}
