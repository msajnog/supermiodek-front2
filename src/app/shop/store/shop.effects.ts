import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as ShopActions from './shop.actions';
import { ShipmentMethodResponse } from '../shop.interface';
import { Observable } from 'rxjs/Observable';
import { ContactDataResponse } from '../../core/footer/footer.interface';
import * as FooterActions from '../../core/footer/store/footer.actions';
import { Toast } from 'angular2-toaster';

@Injectable()
export class ShopEffects {
  @Effect()
  getShipmentMethods = this.action$
    .ofType(ShopActions.GET_SHIPMENT_METHODS)
    .switchMap((action: ShopActions.GetShipmentMethods) => {
      return this.httpClient.get<ShipmentMethodResponse>('/api/config/shipmentMethods', {
        observe: 'body',
        responseType: 'json',
      });
    })
    .map(
      (shipmentMethodsResponse) => {
        return {
          type: ShopActions.SET_SHIPMENT_METHODS,
          payload: shipmentMethodsResponse.data
        };
      }
    );

  @Effect()
  placeOrder = this.action$
    .ofType(ShopActions.PLACE_ORDER)
    .switchMap((action: ShopActions.PlaceOrder) => {
      return this.httpClient.post('/api/order', action.payload)
        .do((response) => {
          return response;
        })
        .catch((error: HttpErrorResponse) => {
          return Observable.empty();
        })
        .map((response: ContactDataResponse) => {
          if (response.status) {
            const toast: Toast = {
              type: 'success',
              title: response.message,
            };
            // this.toasterService.pop(toast);
          }
          return {
            type: FooterActions.SET_CONTACT_FORM_STATUS,
            payload: response.status
          };
        });
    });

  constructor(private action$: Actions,
              private httpClient: HttpClient) {}
}
