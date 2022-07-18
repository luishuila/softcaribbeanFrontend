import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { ComponentsModule } from '../Components/components.module';
import { AngularMateriaModule } from '../Modules/angular-materia.module';
import { CustomerlistComponent } from './Customer/customerlist/customerlist.component';
import { CustomersaveComponent } from './Customer/customersave/customersave.component';
import { CustomerupdateComponent } from './Customer/customerupdate/customerupdate.component';
import { CustomerviewComponent } from './Customer/customerview/customerview.component';
import { BinarytreeComponent } from './binarytree/binarytree.component';


@NgModule({
  declarations: [
    PagesComponent,
    CustomerlistComponent,
    CustomersaveComponent,
    CustomerupdateComponent,
    CustomerviewComponent,
    BinarytreeComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule,
    AngularMateriaModule,

  ]
})
export class PagesModule { }
