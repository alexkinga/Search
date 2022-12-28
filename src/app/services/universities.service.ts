import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniversityModel } from '../models/university.model';

@Injectable()
export class UniversitiesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllByCountry(country: string): Observable<UniversityModel[]> {
    return this._httpClient.get<UniversityModel[]>(`http://universities.hipolabs.com/search?country=${country}`);
  }
}
