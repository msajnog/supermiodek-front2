import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../core/product/product.interface';

@Pipe({
  name: 'checkQuantity'
})
export class CheckQuantity implements PipeTransform {
  transform(products: Product[]): Product[] {
    return products.filter(product => product.quantity > 0);
  }
}
