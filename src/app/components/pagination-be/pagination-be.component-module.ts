import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PaginationBeComponent } from './pagination-be.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule, ReactiveFormsModule],
  declarations: [PaginationBeComponent],
  providers: [],
  exports: [PaginationBeComponent]
})
export class PaginationBeComponentModule {
}
