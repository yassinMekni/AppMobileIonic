import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotcamPageRoutingModule } from './notcam-routing.module';

import { NotcamPage } from './notcam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotcamPageRoutingModule
  ],
  declarations: [NotcamPage]
})
export class NotcamPageModule {}
