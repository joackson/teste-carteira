import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { CarteiraComponent } from './carteira.component';

const routes: Routes = [
  {
      path: '',
      component: CarteiraComponent
  }
];
@NgModule({
  declarations: [
    CarteiraComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class CarteiraModule { }
