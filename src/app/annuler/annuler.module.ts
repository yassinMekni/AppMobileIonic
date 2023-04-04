import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnulerPageRoutingModule } from './annuler-routing.module';

import { AnnulerPage } from './annuler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnulerPageRoutingModule
  ],
  declarations: [AnnulerPage]
})
export class AnnulerPageModule {}
