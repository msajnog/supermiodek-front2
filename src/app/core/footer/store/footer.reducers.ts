import * as FooterActions from './footer.actions';

export interface State {
  name: string;
  email: string;
  phone: string;
  subject: string;
  content: string;
  sendCopy: boolean;
}

const initialState: State = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  content: '',
  sendCopy: null
};

export function footerReducer(state = initialState, action: FooterActions.FooterActions) {
  switch (action.type) {
    case FooterActions.SEND_CONTACT_FORM: {
      return {
        contactData: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
