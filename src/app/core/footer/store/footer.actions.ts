import * as fromFooter from './footer.reducers';

export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';

export class SendContactForm {
  readonly type = SEND_CONTACT_FORM;

  constructor(public payload: {contact: fromFooter.State}) {}
}

export type FooterActions = SendContactForm;
