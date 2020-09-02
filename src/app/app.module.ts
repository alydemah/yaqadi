import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';



import { AppComponent } from './app.component';
import { DefaultContainerComponent } from './containers/default-container/default-container.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

import { AppRoutingModule } from "./app-routing.module";
import { P404Component } from './views/p404/p404.component';
import { P500Component } from './views/p500/p500.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    DefaultContainerComponent,
    DefaultLayoutComponent,
    P404Component,
    P500Component,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),


    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
