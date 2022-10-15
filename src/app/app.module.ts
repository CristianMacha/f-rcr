import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage';
import {provideAuth, getAuth} from '@angular/fire/auth';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {CartComponent} from './pages/cart/cart.component';
import {MaterialModule} from './material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {SharedModule} from "./shared/shared.module";
import { FormComponent } from './pages/form/form.component';
import { DesignComponent } from './pages/design/design.component';
import { Form2Component } from './pages/form2/form2.component';
import { StepOneComponent } from './pages/design/step-one/step-one.component';
import { StepTwoComponent } from './pages/design/step-two/step-two.component';
import { StepThreeComponent } from './pages/design/step-three/step-three.component';
import { StepFourComponent } from './pages/design/step-four/step-four.component';
import { StepFourAreaComponent } from './pages/design/step-four/step-four-area/step-four-area.component';
import { FormEndComponent } from './pages/form-end/form-end.component';
import { OneScreenComponent } from './pages/form-end/one-screen/one-screen.component';
import { TwoScreenComponent } from './pages/form-end/two-screen/two-screen.component';
import { ThreeScreenComponent } from './pages/form-end/three-screen/three-screen.component';
import { FourScreenComponent } from './pages/form-end/four-screen/four-screen.component';
import { FiveScreenComponent } from './pages/form-end/five-screen/five-screen.component';
import { SixScreenComponent } from './pages/form-end/six-screen/six-screen.component';
import { SevenScreenComponent } from './pages/form-end/seven-screen/seven-screen.component';
import { EightScreenComponent } from './pages/form-end/eight-screen/eight-screen.component';
import { NineScreenComponent } from './pages/form-end/nine-screen/nine-screen.component';
import { ZoneComponent } from './pages/form-end/six-screen/zone/zone.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    FormComponent,
    DesignComponent,
    Form2Component,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFourAreaComponent,
    FormEndComponent,
    OneScreenComponent,
    TwoScreenComponent,
    ThreeScreenComponent,
    FourScreenComponent,
    FiveScreenComponent,
    SixScreenComponent,
    SevenScreenComponent,
    EightScreenComponent,
    NineScreenComponent,
    ZoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: FIREBASE_OPTIONS, useValue: environment.firebase,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
