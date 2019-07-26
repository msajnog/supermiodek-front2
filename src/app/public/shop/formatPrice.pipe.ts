import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPrice implements PipeTransform {
  transform(price: number): string {
    let formattedPrice = '';

    if (String(price).indexOf('.') > -1) {
      formattedPrice = String(price).replace('.', ',');
    } else {
      formattedPrice = price + ',00';
    }
    return `${formattedPrice}`;
  }
}
