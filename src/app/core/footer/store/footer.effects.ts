import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import * as FooterActions from './footer.actions';

@Injectable()
export class FooterEffects {
  @Effect()
  sendContact = this.action$
    .ofType(FooterActions.SEND_CONTACT_FORM)
    .switchMap((action: FooterActions.SendContactForm) => {
      console.log('action', action);
      return this.httpClient.post('/api/contact', action.payload);
    });

  constructor(private action$: Actions,
              private httpClient: HttpClient) {}
}
