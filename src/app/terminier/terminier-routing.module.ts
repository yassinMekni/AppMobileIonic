import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminierPage } from './terminier.page';

const routes: Routes = [
  {
    path: '',
    component: TerminierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminierPageRoutingModule {}
