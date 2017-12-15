import * as ProductActions from './home.actions';
import { appInitialState } from '../../store/store-init-state';

export function homeReducer(state = appInitialState.home, action: ProductActions.ProductActions) {
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
