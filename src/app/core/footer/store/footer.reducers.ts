import * as FooterActions from './footer.actions';
import { appInitialState } from '../../../store/store-init-state';

export function footerReducer(state = appInitialState.footer, action: FooterActions.FooterActions) {
  switch (action.type) {
    case FooterActions.SET_CONTACT_DATA:
    case FooterActions.SEND_CONTACT_FORM: {
      return {
        ...state,
        contactData: action.payload
      };
    }
    case FooterActions.SET_CONTACT_FORM_STATUS: {
      return {
        ...state,
        contactDataSend: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
