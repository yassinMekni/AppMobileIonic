import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminierPageRoutingModule } from './terminier-routing.module';

import { TerminierPage } from './terminier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminierPageRoutingModule
  ],
  declarations: [TerminierPage]
})
export class TerminierPageModule {}
