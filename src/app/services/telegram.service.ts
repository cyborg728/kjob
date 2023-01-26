import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Vacancy, VacancyAdd, VacancyGet } from '../models/vacancy.model';
import { City } from '../models/city.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  Telegram: any = null;
  api_url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {
    if ('Telegram' in window) {
      this.Telegram = window.Telegram;
    }
  }

  add_vacancy(data: VacancyAdd) {
    this.http.post(this.api_url + 'vacancy/add', data).subscribe((res) => {
      if (res) {
        if ('id' in res) {
          // TODO: вакансия создана
        }
      } else {
        // ERROR
      }
    });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      this.api_url + 'vacancy/vacancy_category_list'
    );
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.api_url + 'vacancy/city_list');
  }

  get_vacancy(vacancy_id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(this.api_url + 'vacancy/' + vacancy_id);
  }

  // getVacancies(): Observable<Vacancy[]> {
  //   return this.http.post<Vacancy[]>(this.api_url + 'vacancy/list', {});
  // }
}
