import { UserContactData } from '../footer.interface';

export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';

export class SendContactForm {
  readonly type = SEND_CONTACT_FORM;

  constructor(public payload: {contact: UserContactData}) {}
}

export type FooterActions = SendContactForm;
