import { Category } from "./category.model";
import { City } from "./city.model";

export interface Vacancy {
  id: number;
  created_at: string;
  category_id: string;
  category: Category;
  city: City;
  city_id: string;
  need_visa: string;
  salary_type: string;
  salary: string;
  apt: string;
  vacancy_for: string;
  comment: string;
}

export interface VacancyAdd {
  category_id: string;
  city_id: string;
  need_visa: string;
  salary_type: string;
  salary: string;
  apt: string;
  vacancy_for: string;
  comment: string;
}

export interface VacancyGet {
  id: number;
}
