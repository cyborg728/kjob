import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddVacancyRoutingModule } from './add-vacancy-routing.module';
import { AddVacancyComponent } from './add-vacancy.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';


@NgModule({
  declarations: [
    AddVacancyComponent
  ],
  imports: [
    CommonModule,
    AddVacancyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzRadioModule,
    NzButtonModule,
    NzCheckboxModule
  ]
})
export class AddVacancyModule { }
