import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BackofficeComponent} from './backoffice.component';
import {BackofficeRoutingModule} from './backoffice-routing.module';
import {OrderComponent} from './order/order.component';
import {MaterialModule} from "../material/material.module";

@NgModule({
  declarations: [
    BackofficeComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BackofficeRoutingModule,
    MaterialModule
  ]
})
export class BackofficeModule {
}
