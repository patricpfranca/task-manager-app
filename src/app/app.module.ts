import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/auth.service';
import { TokenService } from './shared/token.service';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    TokenService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
