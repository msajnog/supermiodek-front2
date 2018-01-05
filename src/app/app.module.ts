import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ToasterModule } from 'angular2-toaster';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { rootReducer } from './store/app.reducers';
import { ProductEffects } from './home/store/home.effects';
import { ShopEffects } from './shop/store/shop.effects';
import { ShopComponent } from './shop/shop.component';
import { FormatPrice } from './shop/formatPrice.pipe';
import { CheckQuantity } from './shop/checkQuantity.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    FormatPrice,
    CheckQuantity,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToasterModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    EffectsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ProductEffects, ShopEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
