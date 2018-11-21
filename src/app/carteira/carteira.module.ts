import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarteiraService } from './carteira.service';   

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
  providers: [CarteiraService],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class CarteiraModule { }
