import { Product } from '../../core/product/product.interface';
import { Temperature } from '../home.interface';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const FETCH_TEMPERATURES = 'FETCH_TEMPERATURES';
export const SET_TEMPERATURES = 'SET_TEMPERATURES';

export class FetchProducts {
  readonly type = FETCH_PRODUCTS;
}

export class SetProducts {
  readonly type = SET_PRODUCTS;

  constructor(public payload: Product[]) {}
}

export class FetchTemperatures {
  readonly type = FETCH_TEMPERATURES;
}

export class SetTemperatures {
  readonly type = SET_TEMPERATURES;

  constructor(public payload: Temperature[]) {}
}

export type ProductActions = FetchProducts | SetProducts | FetchTemperatures | SetTemperatures;
