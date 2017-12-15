import { Product } from '../../core/product/product.interface';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export class FetchProducts {
  readonly type = FETCH_PRODUCTS;
}

export class SetProducts {
  readonly type = SET_PRODUCTS;

  constructor(public payload: Product[]) {}
}

export type ProductActions = FetchProducts | SetProducts;
