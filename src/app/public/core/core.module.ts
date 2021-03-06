import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { EffectsModule } from '@ngrx/effects';
import { FooterEffects } from './footer/store/footer.effects';
import { ToasterModule } from 'angular2-toaster';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    ProductComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    ToasterModule,
    RouterModule,
    EffectsModule.forFeature([FooterEffects]),
    ScrollToModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    ProductComponent,
    FooterComponent
  ]
})
export class CoreModule { }
