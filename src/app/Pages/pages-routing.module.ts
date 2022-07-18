
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinarytreeComponent } from './binarytree/binarytree.component';
import { CustomerlistComponent } from './Customer/customerlist/customerlist.component';



const routes: Routes = [
  // {path:'product', component:ProductCreateComponent},
  {path:'customerlist', component:CustomerlistComponent},
  {path:'', component:BinarytreeComponent},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
