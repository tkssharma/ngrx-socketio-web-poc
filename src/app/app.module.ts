import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import {SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SocketIoModule} from 'ngx-socket-io';
import {environment} from '@app/env';
import {ROOT_REDUCERS} from './ngrx/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule,
    AuthModule.forRoot(),
    CoreModule.forRoot(),
    SharedModule,
    StoreModule.forRoot(ROOT_REDUCERS), /* Initialise the Central Store with Application's main reducer*/
    EffectsModule.forRoot([]), /* Start monitoring app's side effects */
   StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
