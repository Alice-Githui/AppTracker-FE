import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PotentialComponent } from './components/potential/potential.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AllPotentialsComponent } from './components/all-potentials/all-potentials.component';
import { RegistrationComponent } from './components/reg/registration/registration.component';
import { LoginComponent } from './components/reg/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PotentialComponent,
    NavbarComponent,
    AllPotentialsComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
