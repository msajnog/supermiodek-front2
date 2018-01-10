import { ContactData } from '../footer.interface';

export const SET_CONTACT_DATA = 'SET_CONTACT_DATA';
export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';
export const SET_CONTACT_FORM_STATUS = 'SET_CONTACT_FORM_STATUS';

export class SetContactData {
  readonly type = SET_CONTACT_DATA;

  constructor(public payload: ContactData) {}
}

export class SendContactForm {
  readonly type = SEND_CONTACT_FORM;

  constructor(public payload: ContactData) {}
}

export class SetContactFormStatus {
  readonly type = SET_CONTACT_FORM_STATUS;

  constructor(public payload: boolean) {}
}

export type FooterActions = SetContactData | SendContactForm | SetContactFormStatus;
