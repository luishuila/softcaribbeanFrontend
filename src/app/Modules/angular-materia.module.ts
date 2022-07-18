import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
const AngularModules = [
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  FormsModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatDialogModule,
];

@NgModule({
  declarations: [],
  imports: [

  CommonModule
  ],
  exports: [
    AngularModules
  ]
})
export class AngularMateriaModule { }
