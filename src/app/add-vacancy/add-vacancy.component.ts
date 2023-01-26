import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { TelegramService } from '../services/telegram.service';
import { Category } from '../models/category.model';
import { City } from '../models/city.model';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.scss'],
})
export class AddVacancyComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  category_list!: Category[];
  city_list!: City[];
  vacancy_for = [
    { label: 'Мужчин', value: 'wqe', checked: true },
    { label: 'Женщин', value: 'qweqwe', checked: true },
  ];
  vacancy_for_checked = true;

  add_vacancy() {
    if (this.validateForm.valid) {
      this.telegramService.add_vacancy(this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private telegramService: TelegramService,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      category_id: ['4', [Validators.required]],
      city_id: ['2', [Validators.required]],
      need_visa: ['2'],
      vacancy_for: ['3'],
      salary_type: ['3'],
      salary: ['100000', [Validators.required]],
      apt: ['2'],
      comment: ['test', [Validators.required]],
    });
    this.telegramService.getCategories().subscribe((data) => {
      this.category_list = data;
    });
    this.telegramService.getCities().subscribe((data) => {
      this.city_list = data;
    });
  }
}
