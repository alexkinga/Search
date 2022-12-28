import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SearchBeComponent } from './search-be.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  declarations: [SearchBeComponent],
  providers: [],
  exports: [SearchBeComponent]
})
export class SearchBeComponentModule {
}
