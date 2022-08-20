import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {canActivate} from '@angular/fire/compat/auth-guard';
import {redirectLoggedInTo} from '@angular/fire/compat/auth-guard';

const redirectLoggedInToOrders = () => redirectLoggedInTo(['backoffice/orders']);

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToOrders),
    title: 'Login'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationRoutingModule {
}
