import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../models/vacancy.model';
import { TelegramService } from '../services/telegram.service';

@Component({
  selector: 'app-detail-vacancy',
  templateUrl: './detail-vacancy.component.html',
  styleUrls: ['./detail-vacancy.component.scss'],
})
export class DetailVacancyComponent implements OnInit {
  vacancy_id: number | undefined;
  private sub: any;

  vacancy: Vacancy = {} as Vacancy;

  vacancy_title = '';
  vacancy_need_visa_text = '';
  vacancy_for_text = '';
  vacancy_salary_type_text = ''

  constructor(
    private activated_route: ActivatedRoute,
    private telegramService: TelegramService
  ) {}

  ngOnInit(): void {
    this.sub = this.activated_route.params.subscribe((params) => {
      this.vacancy_id = +params['vacancy_id'];

      if (isNaN(this.vacancy_id)) {
        // TODO: Route 404
      } else {
        this.telegramService
          .get_vacancy(this.vacancy_id)
          .subscribe((vacancy) => {
            if (vacancy) {
              this.vacancy = vacancy;
              this.vacancy_title =
                vacancy.category.name_ru + ' - ' + vacancy.city.name_ru;

              this.vacancy_need_visa_text =
                vacancy.need_visa === '1' ? 'Да' : 'Нет';
                this.vacancy_for_text =
                  vacancy.vacancy_for === '1' ? 'Мужчин' : vacancy.vacancy_for === '2' ? 'Женщин' : 'Всех';
                  this.vacancy_salary_type_text =
                    vacancy.salary_type === '1' ? 'Ежедневно' : vacancy.salary_type === '2' ? 'Раз в неделю' : 'Раз в месяц';
            } else {
              // TODO: Route 404
            }
          });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
