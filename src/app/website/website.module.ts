import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';



@NgModule({
  declarations: [WebsiteComponent],
  exports: [WebsiteComponent],
  imports: [
    CommonModule
  ]
})
export class WebsiteModule { }
