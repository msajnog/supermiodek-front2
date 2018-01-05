import * as ShopActions from './shop.actions';
import { appInitialState } from '../../store/store-init-state';

export function shopReducer(state = appInitialState.shop, action: ShopActions.ShopActions) {
  switch (action.type) {
    case ShopActions.SET_SHIPMENT_METHODS: {
      return {
        ...state,
        shipmentMethods: [...action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
