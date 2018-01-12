import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { FormatPrice } from './shop/formatPrice.pipe';
import { CheckQuantity } from './shop/checkQuantity.pipe';
import { AuthComponent } from './auth/auth.component';
import { AuthEffects } from './auth/store/auth.effects';
import { PublicAppComponent } from './public-app/public-app.component';

@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    FormatPrice,
    CheckQuantity,
    AuthComponent,
    PublicAppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    CoreModule,
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    HomeComponent,
    ShopComponent,
    CoreModule
  ]
})
export class PublicModule { }
