import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { FormComponent } from './form/form.component';
import {OrderComponent} from "./order/order.component";

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: 'orders',
        component: OrderComponent,
        title: 'Orders'
      },
      {
        path: 'forms',
        component: FormComponent,
        title: 'Forms'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class BackofficeRoutingModule { }
