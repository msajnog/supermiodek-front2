import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as AuthActions from './auth.actions';
import { Observable } from 'rxjs/Observable';
import { Toast, ToasterService } from 'angular2-toaster';

@Injectable()
export class AuthEffects {
  @Effect()
  signIn = this.action$
    .ofType(AuthActions.SIGN_IN)
    .mergeMap((action: AuthActions.SignIn) => {
      return this.httpClient.post('/api/authenticate', action.payload)
        .do((response: any) => {
          if (!response.status) {
            const toast: Toast = {
              type: 'error',
              title: response.msg,
            };
            this.toasterService.pop(toast);
          }
          return response;
        })
        .catch((error: HttpErrorResponse) => {
          return Observable.empty();
        });
    })
    .map((response) => {
      if (response.status) {
        return {
          type: AuthActions.SET_AUTH,
          payload: { authenticated: response.status, token: response.token, expires: response.expires }
        };
      }
    });

  constructor (private action$: Actions,
               private httpClient: HttpClient,
               private toasterService: ToasterService) {}
}
