import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    ProductComponent
  ]
})
export class CoreModule { }
