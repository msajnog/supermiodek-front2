import * as ShopActions from './shop.actions';
import { appInitialState } from '../../store/store-init-state';
import * as FooterActions from '../../core/footer/store/footer.actions';

export function shopReducer(state = appInitialState.shop, action: ShopActions.ShopActions) {
  switch (action.type) {
    case ShopActions.SET_SHIPMENT_METHODS: {
      return {
        ...state,
        shipmentMethods: [...action.payload]
      };
    }
    case ShopActions.SET_ORDER_FORM_STATUS: {
      return {
        ...state,
        orderDataSend: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
