import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  LayoutModule,
  FlexLayoutModule
];

@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialModule { }
