import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { SearchBeComponent } from './components/search-be/search-be.component';
import { PaginationBeComponent } from './components/pagination-be/pagination-be.component';
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { SearchBeComponentModule } from './components/search-be/search-be.component-module';
import { UniversitiesServiceModule } from './services/universities.service-module';
import { PaginationBeComponentModule } from './components/pagination-be/pagination-be.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductSearchComponent }, { path: 'search-be', component: SearchBeComponent }, { path: 'pagination-be', component: PaginationBeComponent }]), ProductSearchComponentModule, ProductServiceModule, SearchBeComponentModule, UniversitiesServiceModule, PaginationBeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
