import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatPrice } from './shop/formatPrice.pipe';
import { CheckQuantity } from './shop/checkQuantity.pipe';
import { AuthComponent } from './auth/auth.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    FormatPrice,
    CheckQuantity,
    AuthComponent,
  ],
  imports: [
    CommonModule,
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
