import * as ProductActions from './product.actions';
import { Product } from '../../core/product/product.interface';

export interface State {
  products: Product[];
}

const initialState: State = {
  products: []
};

export function productReducer(state = initialState, action: ProductActions.ProductActions) {
  switch (action.type) {
    case ProductActions.SET_PRODUCTS: {
      return {
        ...state,
        products: [...action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
