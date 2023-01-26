import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVacancyComponent } from './detail-vacancy.component';

const routes: Routes = [{ path: '', component: DetailVacancyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailVacancyRoutingModule { }
