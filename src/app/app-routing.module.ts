import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './pages/cart/cart.component';
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {redirectUnauthorizedTo} from "@angular/fire/auth-guard";

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
