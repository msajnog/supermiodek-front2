import { ActionReducerMap } from '@ngrx/store';
import * as fromProducts from '../home/store/product.reducers';
import * as fromFooter from '../core/footer/store/footer.reducers';

export interface AppState {
  products: fromProducts.State;
  footer: fromFooter.State
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productReducer,
  footer: fromFooter.footerReducer
};
