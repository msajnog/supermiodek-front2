import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as FooterActions from './footer.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FooterEffects {
  @Effect({ dispatch: false })
  sendContact = this.action$
    .ofType(FooterActions.SEND_CONTACT_FORM)
    .mergeMap((action: FooterActions.SendContactForm) => {
      return this.httpClient.post('/api/contact', action.payload)
        .do(() => {

        })
        .catch((error: HttpErrorResponse) => {
          return Observable.empty();
        });
    });

  constructor(private action$: Actions,
              private httpClient: HttpClient) {}
}
