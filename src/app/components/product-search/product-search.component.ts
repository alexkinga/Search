import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-search',
  styleUrls: ['./product-search.component.scss'],
  templateUrl: './product-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  private _startsWithSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public startsWith$: Observable<string> = this._startsWithSubject.asObservable();

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
  this.startsWith$,
  ]).pipe(
    map(([products, startsWith]) => products.filter(product => product.title.startsWith(startsWith)))
  );

  constructor(private _productService: ProductService) {
  }

  onSearchSubmitted(search: FormGroup): void {
    this._startsWithSubject.next(search.get('title')?.value);
  }
}
