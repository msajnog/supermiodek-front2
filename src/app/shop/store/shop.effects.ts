import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import * as ShopActions from './shop.actions';
import { ShipmentMethodResponse } from '../shop.interface';

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

  constructor(private action$: Actions,
              private httpClient: HttpClient) {}
}
