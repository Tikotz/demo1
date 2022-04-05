import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Copyright2Component } from './copyright2/copyright2.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { AuthModule } from './auth/auth.module';
import { SimpleBottonComponent } from './simple-botton/simple-botton.component';
import { SomeEventsComponent } from './some-events/some-events.component';
import { CounterComponent } from './counter/counter.component';
import { Counter2Component } from './counter2/counter2.component';
import { BindComponent } from './bind/bind.component';
import { Ngif2Component } from './ngif2-dog-or-cat/ngif2.component';
import { SwitchComponent } from './switch/switch.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserDetailsComponent,
    Copyright2Component,
    CopyrightComponent,
    SimpleBottonComponent,
    SomeEventsComponent,
    CounterComponent,
    Counter2Component,
    BindComponent,
    Ngif2Component,
    SwitchComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
