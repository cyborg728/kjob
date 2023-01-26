import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-vacancy',
    loadChildren: () =>
      import('./add-vacancy/add-vacancy.module').then(
        (m) => m.AddVacancyModule
      ),
  },
  {
    path: 'vacancies-list',
    loadChildren: () =>
      import('./vacancies-list/vacancies-list.module').then(
        (m) => m.VacanciesListModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: ':vacancy_id',
    loadChildren: () =>
      import('./detail-vacancy/detail-vacancy.module').then(
        (m) => m.DetailVacancyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
