import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TimePipe } from './pipes/time.pipe';


@NgModule({
  declarations: [
    TimePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    TimePipe
  ]
})
export class CoreModule { }
