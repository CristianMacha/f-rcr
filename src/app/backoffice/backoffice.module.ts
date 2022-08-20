import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BackofficeComponent} from './backoffice.component';
import {BackofficeRoutingModule} from './backoffice-routing.module';
import {OrderComponent} from './order/order.component';
import {MaterialModule} from "../material/material.module";
import { DetailComponent } from './order/detail/detail.component';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    BackofficeComponent,
    OrderComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BackofficeRoutingModule,
    MaterialModule,
    CoreModule,
    SharedModule,
  ]
})
export class BackofficeModule {
}
