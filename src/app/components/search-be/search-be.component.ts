import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, Observable, switchMap} from 'rxjs';
import {UniversitiesService} from '../../services/universities.service';
import {UniversityModel} from '../../models/university.model';

@Component({
  selector: 'app-search-be',
  styleUrls: ['./search-be.component.scss'],
  templateUrl: './search-be.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBeComponent {
  readonly search: FormControl = new FormControl('');
  //valuChanges wykonuje się za każdym razem gdy wartość formularza się zmienia
  readonly universities$: Observable<UniversityModel[]> = this.search.valueChanges.pipe(
    debounceTime(1000),
    switchMap((search) => this._universitiesService.getAllByCountry(search)),
  )

  constructor(private _universitiesService: UniversitiesService) {
  }

}
