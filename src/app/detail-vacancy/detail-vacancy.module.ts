import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailVacancyRoutingModule } from './detail-vacancy-routing.module';
import { DetailVacancyComponent } from './detail-vacancy.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    DetailVacancyComponent
  ],
  imports: [
    CommonModule,
    DetailVacancyRoutingModule,
    NzCardModule,
    NzIconModule  
  ]
})
export class DetailVacancyModule { }
