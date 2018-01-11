import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ToasterModule } from 'angular2-toaster';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { rootReducer } from './store/app.reducers';
import { ProductEffects } from './public/home/store/home.effects';
import { ShopEffects } from './public/shop/store/shop.effects';
import { PublicModule } from './public/public.module';
import { OrdersComponent } from './admin/orders/orders.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToasterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    EffectsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ProductEffects, ShopEffects]),
    PublicModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
