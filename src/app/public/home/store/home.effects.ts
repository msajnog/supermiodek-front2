import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as ProductActions from './home.actions';
import { ProductResponse } from '../../core/product/product.interface';
import {TemperatureResponse} from '../home.interface';

@Injectable()
export class ProductEffects {
  @Effect()
  productFetch = this.action$
    .ofType(ProductActions.FETCH_PRODUCTS)
    .switchMap((action: ProductActions.FetchProducts) => {
      return this.httpClient.get<ProductResponse>('/api/products', {
        observe: 'body',
        responseType: 'json',
      });
    })
    .map(
      (products) => {
        return {
          type: ProductActions.SET_PRODUCTS,
          payload: products.data
        };
      }
    );

  @Effect()
  temperatureFetch = this.action$
    .ofType(ProductActions.FETCH_TEMPERATURES)
    .switchMap((action: ProductActions.FetchTemperatures) => {
      return this.httpClient.get<TemperatureResponse>('/api/temperatures', {
        observe: 'body',
        responseType: 'json',
      });
    })
    .map(
      (response) => {
        return {
          type: ProductActions.SET_TEMPERATURES,
          payload: response
        };
      }
    );

  constructor(private action$: Actions,
              private httpClient: HttpClient) {}
}
