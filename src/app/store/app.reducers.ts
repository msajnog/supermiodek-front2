import { ActionReducerMap } from '@ngrx/store';
import * as fromProducts from '../home/store/product.reducers';

export interface AppState {
  products: fromProducts.State;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productReducer
};
