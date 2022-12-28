import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {FormControl} from "@angular/forms";
import {Observable, of, startWith} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-pagination-be',
  styleUrls: ['./pagination-be.component.scss'],
  templateUrl: './pagination-be.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationBeComponent {
  readonly limit : FormControl = new FormControl(15);
  readonly limitOptions$: Observable<number[]> = of([5,10,15,20,25]);
  readonly products$ : Observable<ProductModel[]> = this.limit.valueChanges.pipe(
    startWith(15),
    switchMap((limit) => this._productService.getAllByLimit(limit))
  );
  constructor(private _productService: ProductService) {
  }
}
