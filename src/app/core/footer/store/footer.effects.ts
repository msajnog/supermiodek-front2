import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as FooterActions from './footer.actions';
import { Observable } from 'rxjs/Observable';
import { ToasterService, Toast } from 'angular2-toaster';
import { ContactDataResponse } from '../footer.interface';

@Injectable()
export class FooterEffects {
  @Effect()
  sendContact = this.action$
    .ofType(FooterActions.SEND_CONTACT_FORM)
    .mergeMap((action: FooterActions.SendContactForm) => {
      return this.httpClient.post('/api/contact', action.payload)
        .do((response) => {
          return response;
        })
        .catch((error: HttpErrorResponse) => {
          return Observable.empty();
        });
    })
    .map((response: ContactDataResponse) => {
      if (response.status) {
        const toast: Toast = {
          type: 'success',
          title: response.message,
        };
        this.toasterService.pop(toast);
      }
      return {
        type: FooterActions.SET_CONTACT_FORM_STATUS,
        payload: response.status
      };
    });

  constructor(private action$: Actions,
              private httpClient: HttpClient,
              private toasterService: ToasterService) {}
}
