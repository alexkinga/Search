import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductSearchComponent} from './components/product-search/product-search.component';
import {ProductSearchComponentModule} from './components/product-search/product-search.component-module';
import {ProductServiceModule} from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products',
    component: ProductSearchComponent
  }]), ProductSearchComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
