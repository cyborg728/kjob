import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacanciesListRoutingModule } from './vacancies-list-routing.module';
import { VacanciesListComponent } from './vacancies-list.component';


@NgModule({
  declarations: [
    VacanciesListComponent
  ],
  imports: [
    CommonModule,
    VacanciesListRoutingModule
  ]
})
export class VacanciesListModule { }
