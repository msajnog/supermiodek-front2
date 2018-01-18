import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as AdminAppActions from './admin-app.actions';
import { Observable } from 'rxjs/Observable';
import { Toast, ToasterService } from 'angular2-toaster';

@Injectable()
export class AdminAppEffects {
  @Effect({dispatch: false})
  signIn = this.action$
    .ofType(AdminAppActions.CHECK_TOKEN)
    .mergeMap((action: AdminAppActions.CheckToken) => {
      return this.httpClient.post('/api/checkToken', action.payload)
        .do((response: any) => {
          console.log(response);
          // if (!response.status) {
          //   const toast: Toast = {
          //     type: 'error',
          //     title: response.msg,
          //   };
          //   this.toasterService.pop(toast);
          // }
          return response;
        })
        .catch((error: HttpErrorResponse) => {
          return Observable.empty();
        });
    });

  constructor (private action$: Actions,
               private httpClient: HttpClient,
               private toasterService: ToasterService) {}
}
