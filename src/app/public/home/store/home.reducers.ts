import * as ProductActions from './home.actions';
import { appInitialState } from '../../../store/store-init-state';

export function homeReducer(state = appInitialState.home, action: ProductActions.ProductActions) {
  switch (action.type) {
    case ProductActions.SET_PRODUCTS: {
      return {
        ...state,
        products: [...action.payload]
      };
    }
    case ProductActions.SET_TEMPERATURES: {
      return {
        ...state,
        temperatures: [...action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
