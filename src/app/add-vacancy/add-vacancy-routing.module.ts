import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVacancyComponent } from './add-vacancy.component';

const routes: Routes = [{ path: '', component: AddVacancyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddVacancyRoutingModule { }
