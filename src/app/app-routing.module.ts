import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import { FormEndComponent } from './pages/form-end/form-end.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const redirectUnauthorizedToCart = () => redirectUnauthorizedTo(['cart']);

const routes: Routes = [
  {
    path: 'contact',
    component: ContactUsComponent,
    title: 'Contact Us'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout',
  },
  {
    path: 'design',
    component: FormEndComponent,
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
    redirectTo: 'contact',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
