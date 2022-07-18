import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMateriaModule } from '../Modules/angular-materia.module';
import { CustomerformComponent } from './Customer/customerform/customerform.component';

const components = [
  CustomerformComponent
];

@NgModule({
  declarations: [
    components,

  ],
  imports: [
    CommonModule,
    AngularMateriaModule
  ],
  exports:[
    components,

  ]
})
export class ComponentsModule { }
