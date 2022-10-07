import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './pages/cart/cart.component';
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import { FormComponent } from './pages/form/form.component';
import { DesignComponent } from './pages/design/design.component';
import { Form2Component } from './pages/form2/form2.component';

const redirectUnauthorizedToCart = () => redirectUnauthorizedTo(['cart']);

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout',
  },
  {
    path: 'form',
    component: FormComponent,
    title: 'form'
  },
  {
    path: 'form2',
    component: Form2Component,
    title: 'form2'
  },
  {
    path: 'design',
    component: DesignComponent,
    title: 'design'
  },
  {
    path: 'backoffice',
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToCart},
    loadChildren: () => import('./backoffice/backoffice.module').then(backoffice => backoffice.BackofficeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then(authentication => authentication.AuthenticationModule),
  },
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
