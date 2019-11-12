import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';
import { MaterialModule } from '../material/material.module';
import { NavFooterComponent } from './nav-footer/nav-footer.component';


@NgModule({
  declarations: [NavComponent, NavFooterComponent],
  imports: [
    CommonModule,
    NavRoutingModule,
    MaterialModule
  ]
})
export class NavModule { }
