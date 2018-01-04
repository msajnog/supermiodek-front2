import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPrice implements PipeTransform {
  transform(price: string): string {
    let formattedPrice = '';
    price = price.toString();
    if (price.indexOf('.') > -1) {
      formattedPrice = price.replace('.', ',');
    } else {
      formattedPrice = price + ',00';
    }
    return `${formattedPrice}`;
  }
}
