import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutComponent } from './navegation/layout/layout.component';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './navegation/sidenav/sidenav.component';
import { HeaderComponent } from './navegation/header/header.component';
import { RouterModule } from '@angular/router';

const Components = [
  SharedComponent,
  LayoutComponent
];

@NgModule({
  declarations: [
    Components,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [

    CommonModule,
    LayoutModule,
    MatToolbarModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [Components],

})
export class SharedModule { }
