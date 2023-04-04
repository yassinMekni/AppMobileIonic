import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotcamPage } from './notcam.page';

const routes: Routes = [
  {
    path: '',
    component: NotcamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotcamPageRoutingModule {}
